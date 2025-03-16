// ==UserScript==
// @name         stupid thingy
// @description  stupid thingy
// @author       TheTridentGuy (http://thetridentguy.xyz), femboynavy (femboy.navy), Kayla Blosser (owo.bet)
// @license      GNU General Public License v3.0 or later; http://www.gnu.org/copyleft/gpl.html
// @version      1.0
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==
/*
    Slack Cuddles, a userscript that replaces all instances of "huddle" with "cuddle" in Slack.
    Copyright (C) 2024 TheTridentGuy (http://thetridentguy.xyz)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
(function() {
    "use strict";
    // if(!GM_info.isIncognito) {
    //     return;
    // }
    var imgs = document.getElementsByTagName("img");
    for(const img of imgs) {
        console.log(img.src);
    }
})();