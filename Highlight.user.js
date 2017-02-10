// ==UserScript==
// @name         Highlight
// @namespace    stackuserflow
// @version      0.1
// @description  highlight new posts
// @author       Guilherme Nascimento
// @match        http://pt.stackoverflow.com/*
// @match        http://stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function(doc) {
    'use strict';

    var bgColor = '#FCA'; //Troque pela cor desejada

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
