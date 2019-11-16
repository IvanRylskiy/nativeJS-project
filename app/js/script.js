import { home } from './home.js';
import { request } from './request.js';
import { menu } from './menu.js';

const urlHome = 'http://127.0.0.1:5500/JS/projectOne/app/data/home.json';
window.onload = function() {
    request(urlHome, home);
};
let allLinks = document.querySelectorAll('a');
allLinks.forEach(elements => {
    elements.addEventListener('click', (event) => {
        event.preventDefault();
        request(urlHome, home);
    });
});
menu();