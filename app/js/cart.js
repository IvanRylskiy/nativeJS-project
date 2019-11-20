const cartItems = [];

export class Cart {
    constructor(productPrice) {
        this.productPrice = productPrice;
    }
    addTotalToCart(item) {
        this.productPrice += +item.productPrice;
        // console.log(this.productPrice);
        let totalPrice = document.querySelector('.total-price');
        totalPrice.textContent = '$'.concat(this.productPrice);
        if (totalPrice.textContent != '') {
            totalPrice.style.display = 'inline-block';
        }
        // console.log(item, 'odin item');
        cartItems.push(item);
        // console.log(cartItems, 'massiv itemov');
    }
}

export function addToCart() {
    let btnAddToCart = document.querySelectorAll('.more-info');

    btnAddToCart.forEach(element => {
        element.addEventListener('click', () => {
            let productInfo = {};
            let productImg = element.parentNode.parentNode.children[0].children[0].src,
                productSupp = element.parentNode.parentNode.children[1].children[0].children[0].textContent,
                productProd = element.parentNode.parentNode.children[1].children[0].children[1].textContent,
                productPriceString = element.parentNode.parentNode.children[1].children[0].children[2].textContent,
                productPrice = +(productPriceString.split('$')[1].split(',')[0] + productPriceString.split('$')[1].split(',')[1]);
            productInfo.productImg = productImg;
            productInfo.productSupp = productSupp;
            productInfo.productProd = productProd;
            productInfo.productPrice = productPrice;
            cartInstance.addTotalToCart(productInfo);
        });
    });
}