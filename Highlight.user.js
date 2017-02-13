// ==UserScript==
// @name         Highlight
// @namespace    stackuserflow
// @version      0.1.1
// @description  highlight new posts
// @author       Guilherme Nascimento
// @match        *://stackapps.com/*
// @match        *://askubuntu.com/*
// @match        *://superuser.com/*
// @match        *://serverfault.com/*
// @match        *://stackoverflow.com/*
// @match        *://stackexchange.com/*
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
// @grant        none
// ==/UserScript==

(function(doc) {
    'use strict';

    var bgColor = '#e1e1f1'; //Troque pela cor desejada

    function trigger() {
        var s = doc.createElement("style");
        s.textContent = '.tagged-interesting {' +
                        '     background-color: ' + bgColor + ' !important;' +
                        '}';

        doc.head.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        trigger();
    } else {
        doc.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
