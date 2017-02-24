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

(function(doc, $){

    var styleUrl = 'https://raw.githubusercontent.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/master/assets/sch.css';

    var init = function(){
        this.div = null;
        this.lastUserReport = null;
    }

    init.prototype = {
        init : function(){

            // CREATE DIV TO NAMES
            var div = doc.createElement('div');
            div.className = 'sch content_menu';
            var ul = doc.createElement('ul');
            div.appendChild(ul);
            doc.body.appendChild(div);

            // ADD STYLE
            var style = doc.createElement('style');
            style.rel ="stylesheet";
            style.type ="text/css";
            style.href=styleUrl;

            doc.head.appendChild(style);

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
        }
    }

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

}(document, jQuery))