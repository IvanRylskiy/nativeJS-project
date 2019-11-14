// Second Task
// Реализовать динамическое создание блока "товары"
// При каждой загрузке страницы товары, попадающие в блок, должны выбираться произвольно

let products = [
    {
        src: "assets/img/home/top-1.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/top-2.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/top-3.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/left-1.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/left-2.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/left-3.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/left-4.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/left-5.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/left-6.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/left-7.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/right-1.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/right-2.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/right-3.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/right-4.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/right-5.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/right-6.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
    {
        src: "assets/img/home/right-7.jpg", 
        suppliersName: "Supplier’s Name Here", 
        productName: "Product Name Here", 
        price: "$29,354.75"
    },
];

let productsLength = products.length;
console.log(productsLength, 'количество продуктов');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomProductsLength = getRandomInt(0, productsLength);
console.log(randomProductsLength, 'рандомное количество продуктов');

const topBlock = document.querySelector('.top');
const leftBlock = document.querySelector('.left');
const rightBlock = document.querySelector('.right');
let cycleRandomElement = randomProductsLength;

const cardSizeTextMd = 'card-md';
const cardSizeTextLg = 'card-lg';
const cardSizeTextSm = 'card-sm';

function drawCard(block, cardSizeText) {
    let randomElement = getRandomInt(0, cycleRandomElement - 1);
    const element = products.splice(randomElement, 1)[0];
    let cardSize = document.createElement('div');
    cardSize.className = `${cardSizeText} top__${cardSizeText}`;
    cardSize.innerHTML = `<div class="${cardSizeText}__top">
                            <img src="${element.src}" alt="${cardSizeText}__img" class="${cardSizeText}__img">
                        </div>
                        <div class="${cardSizeText}__bot">
                            <div class="desc ${cardSizeText}__desc">
                                <p class="supp desc__supp">${element.suppliersName}</p>
                                <p class="prod desc__prod">${element.productName}</p>
                                <p class="price desc__price">${element.price}</p>
                            </div>
                            <svg class="more-info" viewbox="0 0 12 20">
                                <use xlink:href="assets/img/icons.svg#more-info"></use>
                            </svg>
                        </div>`;
    block.appendChild(cardSize);
    cycleRandomElement--;
}

function drawHome() {
    for (let i = 0; i < randomProductsLength; i++) {
        if (i < 3) {
            drawCard(topBlock, cardSizeTextMd);
        }

        if (i == 3) {
            drawCard(leftBlock, cardSizeTextLg);
        }

        if ((i > 3) && (i < 8)) {
            drawCard(rightBlock, cardSizeTextSm);
        }

        if ((i > 7) && (i < 12)) {
            drawCard(leftBlock, cardSizeTextSm);
        }

        if (i == 12) {
            drawCard(rightBlock, cardSizeTextLg);
        }

        if ((i > 12) && (i < 15)) {
            drawCard(leftBlock, cardSizeTextSm);
        }

        if ((i > 14) && (i < 17)) {
            drawCard(rightBlock, cardSizeTextSm);
        }
    }
}

drawHome();