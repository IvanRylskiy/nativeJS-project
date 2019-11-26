// Second Task
// Реализовать динамическое создание блока "товары"
// При каждой загрузке страницы товары, попадающие в блок, должны выбираться произвольно

import { addToCart } from './addToCart.js';

export function homeRender(data) {
    let fakeChild = document.body.querySelector('main').children[1];
    let renderData;
    renderData = data;
    let deletedData = [];
    let leftData = [];
    let objAllData = {};
        let homeSectionCreate = document.createElement('section');
        homeSectionCreate.className = 'home';
        homeSectionCreate.innerHTML = `<div class="top home__top"></div>
                                        <div class="bot home__bot">
                                            <div class="left home__left"></div>
                                            <div class="right home__right"></div>
                                        </div>`;

        document.body.querySelector('main').replaceChild(homeSectionCreate, fakeChild);

        let renderDataLength = renderData.cards.length;
        console.log(renderDataLength, 'количество продуктов');

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let randomRenderDataLength = getRandomInt(0, renderDataLength);
        console.log(randomRenderDataLength, 'рандомное количество продуктов');

        const topBlock = document.querySelector('.top');
        const leftBlock = document.querySelector('.left');
        const rightBlock = document.querySelector('.right');
        let cycleRandomElement = randomRenderDataLength;

        const cardSizeTextMd = 'card-md';
        const cardSizeTextLg = 'card-lg';
        const cardSizeTextSm = 'card-sm';

        function drawCard(block, cardSizeText) {
            let randomElement = getRandomInt(0, cycleRandomElement - 1);
            const element = renderData.cards.splice(randomElement, 1)[0];
            deletedData.push(element);
            let cardSize = document.createElement('div');
            cardSize.className = `${cardSizeText} top__${cardSizeText}`;
            cardSize.innerHTML = `<div class="${cardSizeText}__top">
                                    <img src="${element.src}" alt="${cardSizeText}__img" class="${cardSizeText}__img">
                                </div>
                                <div class="${cardSizeText}__bot">
                                    <div class="desc ${cardSizeText}__desc">
                                        <p class="supp desc__supp">${element.suppliersName}</p>
                                        <p class="prod desc__prod">${element.productName}</p>
                                        <p class="price desc__price">$${element.price}</p>
                                    </div>
                                    <svg class="more-info" viewbox="0 0 12 20" data-id="${element.id}">
                                        <use xlink:href="assets/img/icons.svg#more-info"></use>
                                    </svg>
                                </div>`;
            block.appendChild(cardSize);
            cycleRandomElement--;
            leftData = data.cards;
        }

        function drawHome() {
            for (let i = 0; i < randomRenderDataLength; i++) {
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

        objAllData.cards = deletedData.concat(leftData);

        addToCart(objAllData);
}