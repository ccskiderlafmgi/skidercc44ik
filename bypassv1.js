// ==UserScript==
// @name         Bypass Yeumoney gay
// @namespace    http://tampermonkey.net/
// @version      3.1
// @description  Bypass Yeumoney premium
// @author       script by phantruong
// @match        https://yeumoney.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==

function APIKEY() {
    const APIKEY = 'oAgoPqoVaihw7MV4uZGP';  
    return APIKEY;
}

// Lấy API key từ hàm APIKEY()
const userAPIKey = APIKEY();

// Tải tệp pre.js nếu API key hợp lệ
var script = document.createElement('script');
script.src = "https://raw.githubusercontent.com/khoanguyen-dev1/check/refs/heads/main/bypass.js";
document.head.appendChild(script);

// Gửi API key vào tệp pre.js để kiểm tra
window.userAPIKey = userAPIKey;
