// ==UserScript==
// @name         DevelopmentMode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ajuda a detectar se esta em que ambiente esta
// @author       Guilherme Nascimento
// @match        *://localhost/*
// @match        *://127.0.0.1/*
// @grant        none
// ==/UserScript==

(function(doc) {
    'use strict';

    var dmlabel = 'Desenvolvimento'; //Label que aparece no <title> e no div no rodapé

    function trigger() {
        var s = doc.createElement("style");
        s.textContent = '' +
                        '@keyframes dropHeader {' +
                        '    0% {' +
                        '        bottom: 50%;' +
                        '    }' +
                        '    100% {' +
                        '        bottom: 10px;' +
                        '    }' +
                        '}' +
                        '.development-mode-label {' +
                        '     pointer-events: none;' + //Permite o mouse ultrapassar o div
                        '     position: fixed;' +
                        '     right: 10px;' +
                        '     padding: 10px;' +
                        '     border-radius: 4px;' +
                        '     background-color: rgba(0,0,0,0.6);' +
                        '     color: #fff;' +
                        '     animation-name: dropHeader;' +
                        '     animation-iteration-count: 1;' +
                        '     animation-timing-function: ease-out;' +
                        '     animation-duration: 0.8s;' +
                        '} ' +
                        '.development-mode-enter {' +
                        '     bottom: 10px;' +
                        '}';

        doc.head.appendChild(s);

        var d = doc.createElement("div");
        d.className = "development-mode-label";
        d.textContent = dmlabel;
        doc.body.appendChild(d);

        document.title = "[" + dmlabel + "] " + document.title;

        setTimeout(function() {
            d.className = "development-mode-label development-mode-enter";
        }, 100);
    }

    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        trigger();
    } else {
        doc.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
