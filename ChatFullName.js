// ==UserScript==
// @name         ChatFullName
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mostra o nome completo nos chats da rede Stack Exchange
// @author       Guilherme Nascimento
// @match        http://chat.stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function ready(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function() {
        var s = document.createElement("style");
        s.textContent = ".monologue .tiny-signature .username {" +
                        "clear: both !important; overflow: visible !important;" +
                        "}";

        document.head.appendChild(s);
    });
})();