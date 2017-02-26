// ==UserScript==
// @name        ShortCutHelp
// @namespace   stackuserflow
// @version     0.0.1
// @description Adiciona um menu interativo para referenciar um usuario alem de criar um atalho para ultimo referenciado
// @author      Guilherme Lautert
// @match       *://chat.stackoverflow.com/rooms/*
// @match       *://chat.stackexchange.com/rooms/*
// @exclude     *://chat.stackoverflow.com/rooms/info/*
// @exclude     *://chat.stackexchange.com/rooms/info/*
// @grant       none
// ==/UserScript==

(function(doc, win, $){

    var styleUrl = 'https://rawgit.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/master/assets/sch.css';

    var init = function(){
        this.div = null;
        this.textarea = null;
        this.lastUserReport = null;
        this.head = doc.getElementsByTagName('head')[0];
        this.body = doc.getElementsByTagName('body')[0];
    }

    init.prototype = {
        init : function(){

            // CREATE DIV TO NAMES
            var div = doc.createElement('div');
            div.className = 'sch content_menu';
            var ul = doc.createElement('ul');
            div.appendChild(ul);
            this.body.appendChild(div);

            // ADD STYLE
            var style = doc.createElement('link');
            style.rel ="stylesheet";
            style.type ="text/css";
            style.href=styleUrl;

            this.head.appendChild(style);

            this.div = div;
        },
        addUser : function(userName, userId){
            var name = userName;
            var avatar = this.getUserAvatar(userId);

            var li = doc.createElement('li');
            var img = doc.createElement('img');
            img.src = avatar;
            var span = doc.createElement('span');
            span.innerText = userName;

            li.appendChild(img);
            li.appendChild(span);

            $(this.div).find('ul')[0].appendChild(li);

            this.lastUserReport = userName;
        },
        getUserAvatar : function (userId){
            var li = $('#present-users').find('li[class*="user-'+userId+'"]');
            return li.find('div.avatar img').attr('src');
        },
        checkBox : function(){

            var text = this.textarea;
            var matchs = text.match(/@([a-z]+)/ig);

            for(var i in matchs){
                var match = matchs[i];
                var name = match.substr(1).replace(/([A-Z])/g, ' $1').trim();

                var userId = $('#present-users').find('li[class*="user-"] img[title="'+name+'"]');
                if(userId.length > 0){
                    userId = parseInt(userId.parents('li').attr('id').replace(/\D/g, ''));
                }

                if(typeof userId == 'number'){
                    this.addUser(name, userId);
                }
            }

            this.textarea = null;
        },
        addUserToBox : function(userName){
            var text = $('.chat-input textarea#input');
            var content = text.val();
            content += ('@'+userName.replace(/ /g, ''));
            text.val(content);
            this.hideDiv();
        },
        addLastUserToBox : function(){
            this.addUserToBox(this.lastUserReport);
        },
        showDiv : function(x, y){
            if(this.div && $(this.div).find('li').size()>0){
                this.div.style.top = (y - parseInt(this.div.offsetHeight))+'px';
                this.div.style.left = x+'px';// - parseInt(this.div.offsetWidth);
                this.div.style.zIndex = 10000;
                this.div.style.visibility = 'visible';
            }
        },
        hideDiv : function(){
            if(this.div){
                this.div.style.top = -1000;
                this.div.style.left = -1000;
                this.div.style.visibility = 'hidden';   
            }
        }        
    }

    var ctrl = false;
    win.onload = function(){
        var newInit = new init();
        newInit.init();

        $('.chat-input').on('keydown keyup', 'textarea#input', function(e){
            if(e.type == 'keydown'){
                if(e.keyCode == 13){
                    newInit.checkBox();
                }else{
                    newInit.textarea = $(this).val();
                }
            }
            ctrl = e.keyCode == 17 && e.type == 'keydown';
        });

        $('#chat-buttons').on('click', '#sayit-button', function(e){
            newInit.checkBox();
        });

        $('.chat-input').on('dblclick', 'textarea#input', function(e){
            if(ctrl){
                var x = e.clientX;
                var y = e.clientY;
                newInit.showDiv(x, y);
            }else{
                newInit.addLastUserToBox();
            }
        });

        $(newInit.div).on('click', 'ul li', function(e){
            var userName = $(this).find('span').text();
            newInit.addUserToBox(userName);
        });

        $(window).on('keydown', function(e){
            if(e.keyCode == 27){
                newInit.hideDiv();
            }
        });
    }
}(document, window, jQuery))