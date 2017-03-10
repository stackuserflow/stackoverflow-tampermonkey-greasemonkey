// ==UserScript==
// @name        Bye Stars, Bye!
// @namespace    stackuserflow
// @version      0.0.1
// @description  Fazendo um mundo melhor
// @author       Guilherme Nascimento
// @match        *://chat.stackoverflow.com/rooms/*
// @match        *://chat.stackexchange.com/rooms/*
// @exclude      *://chat.stackoverflow.com/rooms/info/*
// @exclude      *://chat.stackexchange.com/rooms/info/*
// @grant        none
// ==/UserScript==

(function(doc, win) {
    'use strict';

    function ByeStarBye(c) {
        if (c.tagName === "LI" && c.querySelector(".owner-star")) {
            if (!c.classList.contains('byestar-bye')) {
                c.classList.add('byestar-bye');
            }
        } else {
            c.classList.remove('byestar-bye');
        }
    }

    function loadCss()
    {
        var style = doc.createElement("style");

        style.type = "text/css";
        style.textContent = ".byestar-bye { display: none !important; }";

        doc.body.appendChild(style);
    }

    function trigger()
    {
        loadCss();

        var inUpdate, target = doc.querySelector("#starred-posts ul");

        var lis = target.querySelectorAll("li");

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
            "attributes": true,
            "subtree": true
        });
    }

    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        trigger();
    } else {
        doc.addEventListener('DOMContentLoaded', trigger);
    }
})(document, window);
