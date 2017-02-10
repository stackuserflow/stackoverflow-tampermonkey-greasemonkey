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

    function trigger() {
        var s = doc.createElement("style");
        s.textContent = '.ux-homologation {' +
                        '     pointer-events: none;' + //Permite o mouse ultrapassar o div
                        '     position: fixed;' +
                        '     bottom: 10px;' +
                        '     right: 10px;' +
                        '     padding: 10px;' +
                        '     border-radius: 4px;' +
                        '     background-color: rgba(0,0,0,0.8);' +
                        '     color: #fff;' +
                        '} ' +
                        '.ux-homologation:hover {' +
                        '     opacity: 0.02;' + //Oculta a DIV
                        '}';

        doc.head.appendChild(s);

        var d = doc.createElement("div");
        d.className = "ux-homologation";
        d.textContent = "Homologação";
        doc.body.appendChild(d);

        document.title = "[Homologação] " + document.title;
    }

    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        trigger();
    } else {
        doc.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
