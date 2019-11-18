export class Cart {
    constructor(price) {
        this.price = price;
    }
    addItem(item) {
        this.price += item.price;
        console.log(this.price);
    }
}
// window.cartInstance = new Cart(0);

// cartInstance.addItem({price: 2000});
// cartInstance.addItem({price: 200});