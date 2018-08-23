// ==UserScript==
// @name         ChatFullName
// @namespace    stackuserflow
// @version      0.1.5
// @description  Mostra o nome completo nos chats da rede Stack Exchange
// @author       Guilherme Nascimento (https://github.com/brcontainer)
// @match        *://chat.stackoverflow.com/*
// @match        *://chat.stackexchange.com/*
// @grant        none
// ==/UserScript==

(function (d) {
    'use strict';

    var custom = `.monologue .tiny-signature .username {
        clear: both !important;
        overflow: visible !important;
        height: auto;
        min-height: 12px;
    }`;

    function trigger()
    {
        var s = d.createElement('style');
        s.textContent = custom;
        d.head.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(d.readyState)) {
        trigger();
    } else {
        d.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
