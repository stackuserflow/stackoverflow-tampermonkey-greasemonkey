// ==UserScript==
// @name         ChatFullName
// @namespace    stackuserflow
// @version      0.1.6
// @description  Mostra o nome completo nos chats da rede Stack Exchange
// @author       Guilherme Nascimento (https://github.com/brcontainer)
// @match        *://chat.stackoverflow.com/*
// @match        *://chat.stackexchange.com/*
// @downloadURL  https://github.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/raw/master/ChatFullName.user.js
// @updateURL    https://github.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/raw/master/ChatFullName.user.js
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
