import { homeRender } from './home.js';
import { makeRequest } from './request.js';
import { menuRender } from './menu.js';
import { categoryRender } from './category.js';
import { Cart } from './cart.js';
import { cartRender } from './cart.js';
import { cartSum } from './cart.js';
import { checkoutShippingRender } from './checkout.js';
import { checkoutPaymentRender } from './checkout.js';
import { checkoutSuccessRender } from './checkout.js';

window.onload = function() {
    if (location.hash == '') {
        location.hash = '#home';
    }
    drawPage();
    
    cartSum();
};

function drawPage() {
    let getMethod = 'GET';
    if (location.hash == '#home') {
        const urlHome = 'http://localhost:3000/data/home.json';
        makeRequest(urlHome, getMethod)
        .then(homeRender)
        .catch(function(error) {
            console.log('Something went wrong', error);
        });
    }
    if (location.hash.indexOf('category') != -1) {
        let categoryName = location.hash.split('_')[1];
        let urlCategory = `http://localhost:3000/data/category_${categoryName}.json`;
        makeRequest(urlCategory, getMethod)
        .then(categoryRender)
        .catch(function(error) {
            console.log('Something went wrong', error);
        });
    }
    if (location.hash == '#cart') {
        cartRender();
    }
    if (location.hash == '#checkout_shipping') {
        checkoutShippingRender();
    }
    if (location.hash == '#checkout_payment') {
        checkoutPaymentRender();
    }
    if (location.hash == '#checkout_success') {
        checkoutSuccessRender();
    }
}

window.addEventListener('hashchange', drawPage);

menuRender();

window.cartInstance = new Cart(0);