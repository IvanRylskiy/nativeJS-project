export function addToCart(data) {
    let btnAddToCart = document.querySelectorAll('.more-info');

    btnAddToCart.forEach(element => {
        element.addEventListener('click', () => {
            let id = element.dataset.id;
            for (let i = 0; i < data.cards.length; i++) {
                if (data.cards[i].id == id) {
                    cartInstance.addTotalToCart(data.cards[i]);
                    // console.log(data.cards[i], 'added to cart');
                }
            }
        });
    });
}