export class Cart {
    constructor(productPrice) {
        this.productPrice = productPrice;
    }
    addTotalToCart(item) {
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

        cartSum();
    }
}

export function cartSum() {
    let localStorageItems = JSON.parse(localStorage.getItem('items'));
    let sum = 0;
    if (localStorageItems != null) {
        for (let i = 0; i < localStorageItems.length; i++) {
            sum = sum + (+(localStorageItems[i].price) * +(localStorageItems[i].quantity));
            let totalPrice = document.querySelector('.total-price');
            totalPrice.textContent = '$'.concat(sum);
            localStorage.setItem('sum', sum);
        }
    } else if (localStorageItems != null) {
        let totalPrice = document.querySelector('.total-price');
        totalPrice.textContent = '$'.concat(sum);
        localStorage.setItem('sum', sum);
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
                quanCartItem.setAttribute('data-id', localStorageItems[i].id);
                priceSumCartItem.textContent = '$'.concat(+(priceCartItem.textContent.split('$')[1]) * +(quanCartItem.value));

                let clone = document.importNode(cartItemTemplate.content, true);
                cartBody.appendChild(clone);
            }
        }

        cartSubTotal();
    }
    cartDraw();

    function cartSubTotal() {
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

    function cartActions() {
        let deleteItemBtn = document.querySelectorAll('.icon__cross'),
            quantityInput = document.querySelectorAll('.cart__quan');

        deleteItemBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                function cartDelItem() {
                    btn.parentNode.parentNode.parentNode.remove();

                    let localStorageItemsRender = JSON.parse(localStorage.getItem('items'));
                    for(let i = 0; i < localStorageItemsRender.length; i++) {
                        if (localStorageItemsRender[i].id == btn.dataset.id) {
                            localStorageItemsRender.splice(i, 1);
                            localStorage.setItem('items', JSON.stringify(localStorageItemsRender));
                            console.log(JSON.parse(localStorage.getItem('items')));
                        }
                    }
                }
                cartDelItem();
                
                cartSubTotal();

                cartSum();

                if (location.hash == '#cart') {
                    let sum = 0;
                    let totalPrice = document.querySelector('.total-price');
                    sum = document.querySelector('.cart__subtotal').textContent.split('$')[1];
                    totalPrice.textContent = '$'.concat(sum);
                    localStorage.setItem('sum', sum);
                }
                });
        });

        quantityInput.forEach(inp => {
            inp.addEventListener('change', () => {
                let itemPrice = inp.parentNode.previousSibling.previousSibling;
                let itemSum = inp.parentNode.nextSibling.nextSibling;
                itemSum.textContent = '$'.concat(+(inp.value) * +(itemPrice.textContent.split('$')[1]));

                let localStorageItemsRender = JSON.parse(localStorage.getItem('items'));
                for(let i = 0; i < localStorageItemsRender.length; i++) {
                    if (localStorageItemsRender[i].id == inp.dataset.id) {
                        localStorageItemsRender[i].quantity = inp.value;
                        localStorage.setItem('items', JSON.stringify(localStorageItemsRender));
                        console.log(JSON.parse(localStorage.getItem('items')));
                    }
                }

                cartSubTotal();

                cartSum();
            });
        });
    }
    cartActions();
}