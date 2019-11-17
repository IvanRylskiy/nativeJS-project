import { home } from './home.js';
import { request } from './request.js';
import { menu } from './menu.js';
import { allLinks } from './menu.js';
import { category } from './category.js';

window.onload = function() {
    if (location.hash == '') {
        location.hash = '#home';
    }
    drawPage();
};

function drawPage() {
    if (location.hash == '#home') {
        const urlHome = 'http://127.0.0.1:5500/JS/projectOne/app/data/home.json';
        request(urlHome, home);
    }
    if (location.hash == '#clothing') {
        let urlClothing = 'http://127.0.0.1:5500/JS/projectOne/app/data/home_decor__clothing.json'
        request(urlClothing, category);
    }
}

window.addEventListener('hashchange', drawPage);

allLinks();
menu();