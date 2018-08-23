// ==UserScript==
// @name         DevelopmentMode
// @namespace    stackuserflow
// @version      0.1.1
// @description  Ajuda a detectar se esta em que ambiente esta
// @author       Guilherme Nascimento (https://github.com/brcontainer)
// @match        *://localhost/*
// @match        *://127.0.0.1/*
// @grant        none
// ==/UserScript==

(function (d) {
    'use strict';

    var dmlabel = 'Desenvolvimento', //Label que aparece no <title> e no div no rodapé
        custom = `@keyframes dropHeader {
            0% {
                bottom: 50%;
            }
            100% {
                bottom: 10px;
            }
        }

        .development-mode-label {
             pointer-events: none;
             position: fixed;
             right: 10px;
             padding: 10px;
             border-radius: 4px;
             background-color: rgba(0,0,0,0.6);
             color: #fff;
             animation-name: dropHeader;
             animation-iteration-count: 1;
             animation-timing-function: ease-out;
             animation-duration: 0.8s;
        }
        .development-mode-enter {
             bottom: 10px;
        }`;

    function trigger()
    {
        var s = d.createElement('style');
        s.textContent = custom;
        d.head.appendChild(s);

        var e = d.createElement('div');
        e.className = 'development-mode-label';
        e.textContent = dmlabel;
        d.head.appendChild(e);

        d.title = '[' + dmlabel + '] ' + d.title;

        setTimeout(function () {
            e.className = 'development-mode-label development-mode-enter';
        }, 100);
    }

    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        trigger();
    } else {
        doc.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
