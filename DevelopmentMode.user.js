// ==UserScript==
// @name         DevelopmentMode
// @namespace    stackuserflow
// @version      0.1.3
// @description  Helps web developers more easily notice whether they are in a development or production environment (based on the URL, such as localhost or 127.0.0.1)
// @author       Guilherme Nascimento (https://github.com/brcontainer)
// @match        *://localhost/*
// @match        *://127.0.0.1/*
// @downloadURL  https://github.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/raw/master/DevelopmentMode.user.js
// @updateURL    https://github.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/raw/master/DevelopmentMode.user.js
// @grant        none
// ==/UserScript==

(function (d) {
    'use strict';

    var dmlabel = 'Development Mode', /* Text to show in <title> tag and label in bottom page */
        custom = `@keyframes dropHeader {
            0% { bottom: 50%; }
            100% { bottom: 10px; }
        }

        .development-mode-label {
            pointer-events: none;
            position: fixed;
            right: 10px;
            padding: 10px;
            border-radius: 4px;
            background-color: rgba(0,0,0,.6);
            color: #fff;
            animation: dropHeader 2s ease-out;
            animation-iteration-count: 1;
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
        d.body.appendChild(e);

        d.title = '[' + dmlabel + '] ' + d.title;

        setTimeout(function () {
            e.className = 'development-mode-label development-mode-enter';
        }, 100);
    }

    if (/^(interactive|complete)$/i.test(d.readyState)) {
        trigger();
    } else {
        d.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
