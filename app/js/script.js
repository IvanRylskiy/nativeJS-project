import { home } from './home.js';
import { request } from './request.js';
import { menu } from './menu.js';
import { allLinks } from './menu.js';

const urlHome = 'http://127.0.0.1:5500/JS/projectOne/app/data/home.json';
window.onload = function() {
    window.location.href = '#home';
    request(urlHome, home);
};
allLinks();
menu();