export class Cart {
    constructor(productPrice) {
        this.productPrice = productPrice;
    }
    addTotalToCart(item) {
        let sumLocalStorage = localStorage.getItem('sum');
        var sum;
        if (sumLocalStorage != null) {
            sum = sumLocalStorage;
        } else {
            sum = 0;
        }
        sum = +(item.price) + +(sum);
        localStorage.setItem('sum', sum);
        let totalPrice = document.querySelector('.total-price');
        totalPrice.textContent = '$'.concat(sum);

        let cartItems = [];
        if (localStorage.getItem('items') != null) {
            cartItems = JSON.parse(localStorage.getItem('items'));
        } else {
            cartItems = [];
        }

        if (cartItems.length != 0) {
            let o = true;
            cartItems.forEach(elem => {
                if (elem.id === item.id) {
                    elem.quantity++;
                    o = false;
                }
            });
            if (o) {
                item.quantity = 1;
                cartItems.push(item);
            }
        } else if (cartItems.length == 0) {
            item.quantity = 1;
            cartItems.push(item);
        }

        localStorage.setItem('items', JSON.stringify(cartItems));
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