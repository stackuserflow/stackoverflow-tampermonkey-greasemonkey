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

            li.appendChild(img);
            li.appendChild(span);

            this.div.appendChild(li);

            this.lastUserReport = userName;
        },
        getUserAvatar : function (userId){
            var li = $('#present-users').find('li[class*="user-'+userId+'"]');
            return li.find('div.avatar img').attr('src');
        },
        checkBox : function(){

            var text = $('.chat-input textarea#input').val();
            var matchs = text.match(/@([a-z]+)/ig);

            for(var i in matchs){
                var match = matchs[i];
                var name = match.substr(1).replace(/([A-Z])/g, ' $1').trim();

                var userId = $('.user-container.monologue').find('.username:contains('+name+')');
                if(userId.length > 0){
                    userId = parseInt(userId.parents('a.signature').attr('class').replace(/\D/g, ''));
                }

                if(typeof userId == 'number'){
                    this.addUser(name, userId);
                }
            }
        },
        addLastUserToBox : function(){
            var text = $('.chat-input textarea#input');
            var content = text.val();
            content += ('@'+this.lastUserReport.replace(/ /g, ''));
            text.val(content);
        },
        showDiv : function(x, y){
            if(this.div && $(this.div).find('li').size()>0){
                this.div.style.top = y - parseInt(this.div.offsetHeight);
                this.div.style.left = x;// - parseInt(this.div.offsetWidth);
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

    win.onload = function(){
        var newInit = new init();
        newInit.init();

        $('.chat-input').on('keydown', 'textarea#input', function(e){
            if(e.keyCode == 13){
                newInit.checkBox();
            }
        });

        $('#chat-buttons').on('click', '#sayit-button', function(e){
            newInit.checkBox();
        });

        $('.chat-input').on('mousedown', 'textarea#input', function(e){
            var x = e.clientX;
            var y = e.clientY;
            newInit.showDiv(x, y);
        });

        $('.chat-input').on('dblclick', 'textarea#input', function(e){
            newInit.addLastUserToBox();
        });

    }
}(document, window, jQuery))