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
    var userList = {};

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

            console.log('Do action addUser');

            var name = userName;
            var avatar = this.getUserAvatar(userId);

            if(typeof userList[name] == 'undefined'){
                userList[name] = {
                    id : userId,
                    name : userName,
                    count : 1,
                };
            }else{
                userList[name].count++;
            }

            userList[name].avatar = avatar;

            this.lastUserReport = userName;
        },
        createListDiv : function(){

            $(this.div).find('ul')[0].innerHTML = '';

            var sorted = Object.values(userList).sort(function(a,b){
                return a.count < b.count;
            });

            for(var i in sorted){

                var current = sorted[i];

                var li = doc.createElement('li');
                var img = doc.createElement('img');
                if(current.avatar){
                    img.src = current.avatar;
                }
                var span = doc.createElement('span');
                span.innerText = current.name;

                li.appendChild(img);
                li.appendChild(span);

                $(this.div).find('ul')[0].appendChild(li);
            }
        },
        getUserAvatar : function (userId){
            var li = $('#present-users').find('li[class*="user-'+userId+'"]');
            if(li.length>0){
                return li.find('div.avatar img').attr('src');
            }else{
                return null;
            }
        },
        checkBox : function(){

            console.log('Do action CheckBox');

            var text = this.textarea;
            var matchs = text.match(/@([a-z]+)/ig);

            for(var i in matchs){
                var match = matchs[i];
                var name = match.substr(1).replace(/([A-Z])/g, ' $1').trim();

                var userId = $('#present-users').find('li[class*="user-"] img').filter(function(){
                    var r = new RegExp(name.replace(/ /g, ' ?'), 'i');
                    return $(this).attr('title').match(r) !== null;
                });

                if(userId.length == 0){
                    return;
                }

                userId = parseInt(userId.parents('li').attr('id').replace(/\D/g, ''));
                if(typeof userId == 'number'){
                    this.addUser(name, userId);
                }
            }

            this.textarea = null;
        },
        addUserToBox : function(userName){
            var text = $('.chat-input textarea#input');
            var content = text.val();
            content += ' '+('@'+userName.replace(/ /g, ''));
            text.val(content);
            this.hideDiv();
        },
        addLastUserToBox : function(){
            this.addUserToBox(this.lastUserReport);
        },
        showDiv : function(x, y){
            if(this.div && Object.values(userList).length>0){

                this.createListDiv();

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

    var isLoaded = false;
    var load = function(){

        if(isLoaded) return;

        isLoaded = true;

        var ctrl = false;
        var alt = false;

        var newInit = new init();
        newInit.init();

        $('.chat-input').on('keydown keyup', 'textarea#input', function(e){
            newInit.hideDiv();
            if(e.type == 'keydown'){
                if(e.keyCode == 13){
                    newInit.checkBox();
                }else{
                    newInit.textarea = $(this).val();
                }
            }
            ctrl = e.keyCode == 17 && e.type == 'keydown';
            alt = e.keyCode == 18 && e.type == 'keydown';
        });

        $('#chat-buttons').on('click', '#sayit-button', function(e){
            newInit.checkBox();
        });

        $('.chat-input').on('contextmenu', 'textarea#input', function(e){
            if(ctrl){
                e.preventDefault();
                var x = e.clientX;
                var y = e.clientY; 
                newInit.showDiv(x, y);
            }else{
                e.preventDefault();
                newInit.addLastUserToBox();
            }
        });

        $(newInit.div).on('click', 'ul li', function(e){
            var userName = $(this).find('span').text();
            newInit.addUserToBox(userName);
        });
    }

    win.onload = function(){
        load();
    }

    setTimeout(function(){
        load();
    }, 1000);

}(document, window, jQuery));

// var script = document.createElement('script');
// script.type="text/javascript";
// script.src = 'https://rawgit.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/master/shortcuthelp.user.js';
// document.head.appendChild(script);