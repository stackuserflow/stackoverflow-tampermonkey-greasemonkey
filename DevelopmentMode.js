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
        s.textContent = '.development-mode-label {' +
                        '     pointer-events: none;' + //Permite o mouse ultrapassar o div
                        '     position: fixed;' +
                        '     bottom: 10px;' +
                        '     right: 10px;' +
                        '     padding: 10px;' +
                        '     border-radius: 4px;' +
                        '     background-color: rgba(0,0,0,0.8);' +
                        '     color: #fff;' +
                        '} ' +
                        '.development-mode-label:hover {' +
                        '     opacity: 0.02;' + //Oculta a DIV
                        '}';

        doc.head.appendChild(s);

        var d = doc.createElement("div");
        d.className = "development-mode-label";
        d.textContent = Label;
        doc.body.appendChild(d);

        document.title = "[" + dmlabel + "] " + document.title;
    }

    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        trigger();
    } else {
        doc.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
