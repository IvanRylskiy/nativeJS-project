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
    console.log(JSON.parse(localStorage.getItem('items')));

    function cartDraw() {
        let cartItemTemplate = document.querySelector('#cart-item'),
            deleteCartItem = cartItemTemplate.content.querySelector('.icon__cross'),
            imgCartItem = cartItemTemplate.content.querySelector('.product__image'),
            prodCartItem = cartItemTemplate.content.querySelector('.product__name'),
            suppCartItem = cartItemTemplate.content.querySelector('.product__supplier'),
            priceCartItem = cartItemTemplate.content.querySelector('.cart__td_price'),
            quanCartItem = cartItemTemplate.content.querySelector('.cart__quan'),
            priceSumCartItem = cartItemTemplate.content.querySelector('.cart__td_sum');

        let cartBody = document.querySelector('.cart__tbody');

        let localStorageItems = JSON.parse(localStorage.getItem('items'));
        if (localStorageItems != null) {
            for (let i = 0; i < localStorageItems.length; i++) {
                deleteCartItem.setAttribute('data-id', localStorageItems[i].id);
                imgCartItem.src = localStorageItems[i].src;
                prodCartItem.textContent = localStorageItems[i].productName;
                suppCartItem.textContent = localStorageItems[i].suppliersName;
                priceCartItem.textContent = '$'.concat(localStorageItems[i].price);
                quanCartItem.value = localStorageItems[i].quantity;
                priceSumCartItem.textContent = '$'.concat(+(priceCartItem.textContent.split('$')[1]) * +(quanCartItem.value));

                let clone = document.importNode(cartItemTemplate.content, true);
                cartBody.appendChild(clone);
            }
        } else {
            cartBody.textContent = 'Корзина пуста';
        }

        let sumItems = document.querySelectorAll('.cart__td_sum');
        let subtotal = document.querySelector('.cart__subtotal');
        let shipping = document.querySelector('.cart__shipping');
        let total = document.querySelector('.cart__total');
        let subtotalRender = 0;
        sumItems.forEach(elem => {
            subtotalRender += +(elem.textContent.split('$')[1]);
        });
        subtotal.textContent = '$'.concat(subtotalRender);
        total.textContent = '$'.concat(+(shipping.textContent.split('$')[1]) + +(subtotal.textContent.split('$')[1]));
    }
    cartDraw();
}