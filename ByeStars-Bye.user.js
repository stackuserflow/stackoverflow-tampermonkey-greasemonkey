// ==UserScript==
// @name        Bye Stars, Bye!
// @namespace    stackuserflow
// @version      0.1.1
// @description  Fazendo um mundo melhor
// @author       Guilherme Nascimento (https://github.com/brcontainer)
// @match        *://chat.stackoverflow.com/rooms/*
// @match        *://chat.stackexchange.com/rooms/*
// @exclude      *://chat.stackoverflow.com/rooms/info/*
// @exclude      *://chat.stackexchange.com/rooms/info/*
// @downloadURL  https://github.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/raw/master/ByeStars-Bye.user.js
// @updateURL    https://github.com/stackuserflow/stackoverflow-tampermonkey-greasemonkey/raw/master/ByeStars-Bye.user.js
// @grant        none
// ==/UserScript==

(function (d) {
    'use strict';

    function ByeStarBye(c)
    {
        if (c.tagName === 'LI' && c.querySelector('.owner-star')) {
            if (!c.classList.contains('byestar-bye')) {
                c.classList.add('byestar-bye');
            }
        } else {
            c.classList.remove('byestar-bye');
        }
    }

    function loadCss()
    {
        var style = d.createElement('style');

        style.type = 'text/css';
        style.textContent = '.byestar-bye { display: none !important; }';

        d.head.appendChild(style);
    }

    function trigger()
    {
        loadCss();

        var inUpdate, target = d.querySelector('#starred-posts ul');

        var lis = target.querySelectorAll('li');

        for (var i = lis.length - 1; i >= 0; i--) {
            ByeStarBye(lis[i]);
        }

        var observer = new MutationObserver(function (mutations) {

            if (inUpdate) { return; }

            inUpdate = true;

            mutations.forEach(function (mutation) {
                ByeStarBye(mutation.target);
            });

            inUpdate = false;
        });

        observer.observe(target, {
            'attributes': true,
            'subtree': true
        });
    }

    if (/^(interactive|complete)$/i.test(d.readyState)) {
        trigger();
    } else {
        d.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
