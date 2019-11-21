import { home } from './home.js';
import { request } from './request.js';
import { menu } from './menu.js';
import { category } from './category.js';
import { Cart } from './cart.js';
import { cart } from './cart.js';

window.onload = function() {
    if (location.hash == '') {
        location.hash = '#home';
    }
    drawPage();
    
    let sumLocalStorage = localStorage.getItem('sum');
    if (sumLocalStorage != null) {
        let totalPrice = document.querySelector('.total-price');
        totalPrice.textContent = '$'.concat(sumLocalStorage);
    }
};

function drawPage() {
    if (location.hash == '#home') {
        const urlHome = 'http://127.0.0.1:5500/JS/projectOne/app/data/home.json';
        request(urlHome, home);
    }
    if (location.hash.indexOf('category') != -1) {
        let categoryName = location.hash.split('_')[1];
        let urlCategory = `http://127.0.0.1:5500/JS/projectOne/app/data/category_${categoryName}.json`;
        request(urlCategory, category);
    }
    if (location.hash == '#cart') {
        cart();
    }
}

window.addEventListener('hashchange', drawPage);

menu();

window.cartInstance = new Cart(0);