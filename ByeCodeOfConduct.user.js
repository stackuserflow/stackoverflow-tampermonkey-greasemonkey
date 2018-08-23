// ==UserScript==
// @name         Bye Code Of Conduct
// @namespace    stackuserflow
// @version      0.1.4
// @description  try to take over the world!
// @author       Guilherme Nascimento (https://github.com/brcontainer)
// @match        *://*.stackoverflow.com/*
// @match        *://*.stackexchange.com/*
// @match        *://mathoverflow.net/*
// @match        *://serverfault.com/*
// @match        *://superuser.com/*
// @match        *://stackapps.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.superuser.com/*
// @match        *://*.stackapps.com/*
// @grant        none
// ==/UserScript==

(function (d) {
    'use strict';

    var content = `[class*=new-contributor] {
        display: none !important;
        position: fixed !important;
        top: -9999px !important;
        left: -9999px !important;
        z-index: -99;
    }`;

    function trigger()
    {
        var s = d.createElement('style');
        s.textContent = content;
        d.head.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(d.readyState)) {
        trigger();
    } else {
        d.addEventListener('DOMContentLoaded', trigger);
    }
})(document);
