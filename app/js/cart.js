const cartItems = [];

export class Cart {
    constructor(productPrice) {
        this.productPrice = productPrice;
    }
    addTotalToCart(item) {
        let sum = 0;
        cartItems.push(item);
        console.log(cartItems, 'massiv itemov');
        for (let i = 0; i < cartItems.length; i++) {
            sum += +(cartItems[i].price);
        }
        let totalPrice = document.querySelector('.total-price');
        totalPrice.textContent = '$'.concat(sum);
    }
}

export function cart() {
    function cartPrep() {
        let fakeChild = document.children[0].children[1].children[0].children[1];
        let cartSectionCreate = document.createElement('section');
        cartSectionCreate.className = 'cart';
        let cartTemplate = document.querySelector('#cart');
        let clone = document.importNode(cartTemplate.content, true);
        document.body.children[0].replaceChild(cartSectionCreate, fakeChild);
        cartSectionCreate.appendChild(clone);
    }
    cartPrep();
}