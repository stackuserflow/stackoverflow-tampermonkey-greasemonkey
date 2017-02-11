// ==UserScript==
// @name         ChatFullName
// @namespace    stackuserflow
// @version      0.1.2
// @description  Mostra o nome completo nos chats da rede Stack Exchange
// @author       Guilherme Nascimento
// @match        *://chat.stackoverflow.com/*
// @match        *://chat.stackexchange.com/*
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
