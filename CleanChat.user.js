// ==UserScript==
// @name         CleanChat
// @namespace    stackuserflow
// @version      0.1.5
// @description  Muda o visual do chat para algo mais simples
// @author       Guilherme Nascimento
// @match        *://chat.stackoverflow.com/rooms/*
// @match        *://chat.stackexchange.com/rooms/*
// @exclude      *://chat.stackoverflow.com/rooms/info/*
// @exclude      *://chat.stackexchange.com/rooms/info/*
// @grant        none
// ==/UserScript==

(function(doc) {
    'use strict';

var custom = (function () {
/*
body {
    background: #f2f2f3 !important;
}
body * {
    box-sizing: border-box;
}
#tabcomplete li,
#reply-count, #flag-count, #modflag-count, .reply-count, #annotation-count {
    box-sizing: content-box;
}
.monologue.catchup-marker, .monologue.catchup-marker-1 {
    border: none !important;
}
.monologue.catchup-marker-1::before {
    content: " " !important;
    border-top: 1px #ccc dotted; !important;
    padding: 1px 0; !important;
    display: block !important;
    margin: 25px 5% 35px 20% !important;
}
.mine.catchup-marker-1::before {
    margin: 25px 20% 35px 5% !important;
}
.system-message-container .system-message {
    text-align: center !important;
    padding: 15px 10px 15px 20px !important;
    color: #6b5656 !important;
}
#container {
    padding: 10px !important;
}
.monologue .messages {
    padding: 15px 5px !important;
    border-radius: 4px !important;
    position: relative !important;
    background: #fff !important;
    border: 1px solid #e1e1e1 !important;
}
.monologue {
    margin-right: 13% !important;
    margin-bottom: 15px !important;
    position: relative !important;
}
.monologue .messages:after, .monologue .messages:before {
    right: 100% !important;
    top: 15px !important;
    border: solid transparent !important;
    content: " " !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
    pointer-events: none !important;
}
.monologue .messages:after {
    border-color: rgba(227, 248, 255, 0) !important;
    border-right-color: #fff !important;
    border-width: 5px !important;
    margin-top: -5px !important;
}
.monologue .messages:before {
    border-color: rgba(208, 234, 243, 0) !important;
    border-right-color: #e1e1e1 !important;
    border-width: 6px !important;
    margin-top: -6px !important;
}
.mine {
    margin-left: 13% !important;
    margin-right: 0 !important;
}
.mine .signature {
   float: right !important;
   text-align: left !important;
   margin-right: 0 !important;
}
.mine .tiny-signature .avatar {
   float: left !important;
   margin: 0 !important;
}
.mine .messages {
    background: #beebff !important;
    border-color: #b0dae8 !important;
}
.mine .messages:after {
    border-color: rgba(227, 248, 255, 0) !important;
    border-left-color: #beebff !important;
}
.mine .messages:before {
    border-color: rgba(208, 234, 243, 0) !important;
    border-left-color: #b0dae8 !important;
}
.mine .messages:after {
    right: -10px !important;
}
.mine .messages:before {
    right: -12px !important;
}
.button {
    background: #5fba7d !important;
    text-shadow: none !important;
    box-shadow: none !important;
    padding: 5px 12px !important;
    border-radius: 3px !important;
    border: none !important;
}
#input-table td.chat-input {
    width: 398px !important;
}
#input {
    padding: 2px !important;
    width: 406px !important;
    background: transparent !important;
    border-color: transparent !important;
    outline: none !important;
    border: none !important;
    resize: none !important;
    -webkit-box-shadow: 0 -2px 0 #c0c0c0 !important;
            box-shadow: 0 -2px 0 #c0c0c0 inset !important;
    transition: all .5s !important;
}
#input:focus {
    -webkit-box-shadow: 0 -3px 0 #5fba7d !important;
            box-shadow: 0 -3px 0 #5fba7d inset !important;
}
#input-area {
    width: 72% !important;
    background: #fdfdfb !important;
    border-top: 1px #d8d1d1 solid !important;
    z-index: 6 !important;
    box-shadow: 0 0 55px rgba(0,0,0,.13) !important;
}
#input-table {
    width: 98% !important;
}
#sidebar {
    background: #fdfdfb !important;
    border-left: 1px #d8d1d1 solid !important;
    z-index: 7 !important;
    padding-right: 0 !important;
}
#input-area a {
    color: #4a825c !important;
}
.avatar img {
    border-radius: 4px !important;
}
#present-users > .present-user {
    margin: 0 2px 2px 0 !important;
    height: auto !important;
}
.monologue .tiny-signature .username {
    clear: both !important;
    overflow: visible !important;
    height: auto !important;
    min-height: 12px !important;
}
#footer-logo {
    background: #f4f2f2 !important;
    border-radius: 2px !important;
}
#sidebar #info #roomtitle {
    text-shadow: none !important;
    text-align: center !important;
}
*/
}).toString().split(/\/\*\n|\n\*\//g).slice(1, -1).join();

    function trigger()
    {
        var s = doc.createElement("style");
        s.textContent = custom;
        doc.head.appendChild(s);

        setTimeout(placeholder, 800);
    }

    function placeholder()
    {
        var input = document.getElementById("input");

        if (input && !input.placeholder) {
            input.placeholder = "Message...";
        }
    }

    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        trigger();
    } else {
        doc.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
