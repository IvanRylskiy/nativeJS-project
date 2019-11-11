// // Циклы

// let dict = {a: 1, b: 2};
// for (let key in dict) { console.log(key, dict[key])};

// let list = ['a', 'b', 'c'];
// for (let item of list) { console.log(item)};

// // Циклы не нужны =)

// Math.random() > 0.3 && console.log('Hello');
// Math.random() > 0.3 || console.log('Hello');

// // Условные операторы

// let value = 1;
// switch(value) {
//     case 1:
//         console.log('1');
//         break;

//     case 'two':
//         console.log('two');
//         break;
    
//     default:
//         console.log('default');
// }

// // String

// 'abc'.length; // 3
// 'abc'.charAt(1); // 'b'
// 'abcdef'.substr(2, 2); // 'cd'
// 'abcdef'.substring(2, 4); // 'cd'
// 'abca'.indexOf('a'); // 0
// 'abca'.lastIndexOf('a'); // 3
// 'abc'.split(','); // ['a', 'b', 'c']
// 'abc'.concat('def', 'ghi'); // 'abcdefghi'
// 'abc'.replace('a', 'A'); // 'Abc'
// 'ABC'.toLowerCase(); // 'abc'
// 'abc'.toUpperCase(); // 'ABC'
// ' abc '.trim(); // 'abc' удаляет пробельные символы

// // Array

// // [].length, Array.isArray(list), [].pop(), [].push(x), [].reverse(), [].shift(), [].unshift(5)
// // [].concat([], []), [].indexOf(x), [].lastIndexOf(x), [].join('-')

// // Object

// // Object.assign({}, human, { pet: 'squirrel' });
// // Object.keys(human);

// // Окружение

// // window, document, navigator, location

// // Отложенное выполнение кода

// let timeoutId = setTimeout(() => {
//     console.log('timeout reached');
//     }, 1000),
//     intervalId = setInterval(() => {
//         console.log('interval reached');
//     }, 2000);

// clearTimeout(timeoutId);
// clearInterval(intervalId);

// First Task
// Реализовать подсветку случайного элемента при загрузке;
// Каждые 2 секунды подсвечивать новый элемент случайным цветом;
// Каждые 2 секунды снимать подсветку со случайного элемента.

// const allElements = document.querySelectorAll('*');
// const intervalAddColor = 2000;
// const intervalRemoveColor = 2000;

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function randomColor() {
//     let r = Math.floor(Math.random() * 256),
//         g = Math.floor(Math.random() * 256),
//         b = Math.floor(Math.random() * 256);
    
//     return '#'.concat(r.toString(16), g.toString(16), b.toString(16));
// }

// function addColor(elements) {
//     elements[getRandomInt(0, allElements.length)].style.backgroundColor = randomColor();
// }

// function removeColor(elements) {
//     elements[getRandomInt(0, allElements.length)].removeAttribute('style');
// }

// setInterval(() => {
//     addColor(allElements);
// }, intervalAddColor);

// setInterval(() => {
//     removeColor(allElements);
// }, intervalRemoveColor);

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

function drawHome() {
    for (let i = 0; i < randomProductsLength; i++) {
        if (i < 3) {
            let randomElement = getRandomInt(0, cycleRandomElement - 1);
            const element = products.splice(randomElement, 1)[0];
            let cardMd = document.createElement('div');
            cardMd.className = 'card-md top__card-md';
            cardMd.innerHTML = `<div class="card-md__top">
                                    <img src="${element.src}" alt="card-md__img" class="card-md__img">
                                </div>
                                <div class="card-md__bot">
                                    <div class="desc card-md__desc">
                                        <p class="supp desc__supp">${element.suppliersName}</p>
                                        <p class="prod desc__prod">${element.productName}</p>
                                        <p class="price desc__price">${element.price}</p>
                                    </div>
                                    <svg class="more-info" viewbox="0 0 12 20">
                                        <use xlink:href="assets/img/icons.svg#more-info"></use>
                                    </svg>
                                </div>`;
            topBlock.appendChild(cardMd);
            cycleRandomElement--;
        }

        if (i == 3) {
            let randomElement = getRandomInt(0, cycleRandomElement - 1);
            const element = products.splice(randomElement, 1)[0];
            let cardLg = document.createElement('div');
            cardLg.className = 'card-lg left__card-lg';
            cardLg.innerHTML = `<div class="card-lg__top">
                                    <img src="${element.src}" alt="card-lg__img" class="card-lg__img">
                                </div>
                                <div class="card-lg__bot">
                                    <div class="desc card-lg__desc">
                                        <p class="supp desc__supp">${element.suppliersName}</p>
                                        <p class="prod desc__prod">${element.productName}</p>
                                        <p class="price desc__price">${element.price}</p>
                                    </div>
                                    <svg class="more-info" viewbox="0 0 12 20">
                                        <use xlink:href="assets/img/icons.svg#more-info"></use>
                                    </svg>
                                </div>`;
            leftBlock.appendChild(cardLg);
            cycleRandomElement--;
        }

        if ((i > 3) && (i < 8)) {
            let randomElement = getRandomInt(0, cycleRandomElement - 1);
            const element = products.splice(randomElement, 1)[0];
            let cardSm = document.createElement('div');
            cardSm.className = 'card-sm left__card-sm';
            cardSm.innerHTML = `<div class="card-sm__top">
                                    <img src="${element.src}" alt="card-sm__img" class="card-sm__img">
                                </div>
                                <div class="card-sm__bot">
                                    <div class="desc card-sm__desc">
                                        <p class="supp desc__supp">${element.suppliersName}</p>
                                        <p class="prod desc__prod">${element.productName}</p>
                                        <p class="price desc__price">${element.price}</p>
                                    </div>
                                    <svg class="more-info" viewbox="0 0 12 20">
                                        <use xlink:href="assets/img/icons.svg#more-info"></use>
                                    </svg>
                                </div>`;
            rightBlock.appendChild(cardSm);
            cycleRandomElement--;
        }

        if ((i > 7) && (i < 12)) {
            let randomElement = getRandomInt(0, cycleRandomElement - 1);
            const element = products.splice(randomElement, 1)[0];
            let cardSm = document.createElement('div');
            cardSm.className = 'card-sm left__card-sm';
            cardSm.innerHTML = `<div class="card-sm__top">
                                    <img src="${element.src}" alt="card-sm__img" class="card-sm__img">
                                </div>
                                <div class="card-sm__bot">
                                    <div class="desc card-sm__desc">
                                        <p class="supp desc__supp">${element.suppliersName}</p>
                                        <p class="prod desc__prod">${element.productName}</p>
                                        <p class="price desc__price">${element.price}</p>
                                    </div>
                                    <svg class="more-info" viewbox="0 0 12 20">
                                        <use xlink:href="assets/img/icons.svg#more-info"></use>
                                    </svg>
                                </div>`;
            leftBlock.appendChild(cardSm);
            cycleRandomElement--;
        }

        if (i == 12) {
            let randomElement = getRandomInt(0, cycleRandomElement - 1);
            const element = products.splice(randomElement, 1)[0];
            let cardLg = document.createElement('div');
            cardLg.className = 'card-lg left__card-lg';
            cardLg.innerHTML = `<div class="card-lg__top">
                                    <img src="${element.src}" alt="card-lg__img" class="card-lg__img">
                                </div>
                                <div class="card-lg__bot">
                                    <div class="desc card-lg__desc">
                                        <p class="supp desc__supp">${element.suppliersName}</p>
                                        <p class="prod desc__prod">${element.productName}</p>
                                        <p class="price desc__price">${element.price}</p>
                                    </div>
                                    <svg class="more-info" viewbox="0 0 12 20">
                                        <use xlink:href="assets/img/icons.svg#more-info"></use>
                                    </svg>
                                </div>`;
            rightBlock.appendChild(cardLg);
            cycleRandomElement--;
        }

        if ((i > 12) && (i < 15)) {
            let randomElement = getRandomInt(0, cycleRandomElement - 1);
            const element = products.splice(randomElement, 1)[0];
            let cardSm = document.createElement('div');
            cardSm.className = 'card-sm left__card-sm';
            cardSm.innerHTML = `<div class="card-sm__top">
                                    <img src="${element.src}" alt="card-sm__img" class="card-sm__img">
                                </div>
                                <div class="card-sm__bot">
                                    <div class="desc card-sm__desc">
                                        <p class="supp desc__supp">${element.suppliersName}</p>
                                        <p class="prod desc__prod">${element.productName}</p>
                                        <p class="price desc__price">${element.price}</p>
                                    </div>
                                    <svg class="more-info" viewbox="0 0 12 20">
                                        <use xlink:href="assets/img/icons.svg#more-info"></use>
                                    </svg>
                                </div>`;
            leftBlock.appendChild(cardSm);
            cycleRandomElement--;
        }

        if ((i > 14) && (i < 17)) {
            let randomElement = getRandomInt(0, cycleRandomElement - 1);
            const element = products.splice(randomElement, 1)[0];
            let cardSm = document.createElement('div');
            cardSm.className = 'card-sm left__card-sm';
            cardSm.innerHTML = `<div class="card-sm__top">
                                    <img src="${element.src}" alt="card-sm__img" class="card-sm__img">
                                </div>
                                <div class="card-sm__bot">
                                    <div class="desc card-sm__desc">
                                        <p class="supp desc__supp">${element.suppliersName}</p>
                                        <p class="prod desc__prod">${element.productName}</p>
                                        <p class="price desc__price">${element.price}</p>
                                    </div>
                                    <svg class="more-info" viewbox="0 0 12 20">
                                        <use xlink:href="assets/img/icons.svg#more-info"></use>
                                    </svg>
                                </div>`;
            rightBlock.appendChild(cardSm);
            cycleRandomElement--;
        }
    }
}

drawHome();