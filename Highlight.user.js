// ==UserScript==
// @name         Highlight
// @namespace    stackuserflow
// @version      0.1.5
// @description  highlight new posts
// @author       Guilherme Nascimento (https://github.com/brcontainer)
// @match        *://stackapps.com/*
// @match        *://askubuntu.com/*
// @match        *://superuser.com/*
// @match        *://serverfault.com/*
// @match        *://stackoverflow.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.stackexchange.com/*
// @match        *://mathoverflow.net/*
// @match        *://mathoverflow.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://*.mathoverflow.com/*
// @exclude      *://chat.*
// @downloadURL  https://github.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/raw/master/Highlight.user.js
// @updateURL    https://github.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/raw/master/Highlight.user.js
// @grant        none
// ==/UserScript==

(function (d) {
    'use strict';

    var bgColor = '#e1e1f1'; //Troque pela cor desejada

    function trigger()
    {
        var s = d.createElement('style');
        s.textContent = `.tagged-interesting {
            background-color: ${bgColor} !important;
        };`

        d.head.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(d.readyState)) {
        trigger();
    } else {
        d.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
