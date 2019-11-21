import { addToCart } from './addToCart.js';

export function category(data) {
    function categoryPrep() {
        let fakeChild = document.children[0].children[1].children[0].children[1];
        let categorySectionCreate = document.createElement('section');
        categorySectionCreate.className = 'category';
        categorySectionCreate.innerHTML =   `<section class="location">
                                                <span class="location-item location__item"><a href="#" class="location-item__link"></a></span>
                                                <svg class="location__icon">
                                                    <use xlink:href="assets/img/icons.svg#arrow-right"></use>
                                                </svg>
                                                <span class="location-item location__item"><a href="#category_${data.subcategory.toLowerCase()}" class="location-item__link"></a></span>
                                            </section>
                                            <h2 class="category__heading"></h2>
                                            <div class="cards category__cards"></div>`;

        document.body.children[0].replaceChild(categorySectionCreate, fakeChild);
    }
    categoryPrep();

    function drawCategory() {
        let locationLinks = document.querySelectorAll('.location-item__link');
        locationLinks[0].textContent = data.category;
        locationLinks[1].textContent = data.subcategory;
        let categoryHeading = document.querySelector('.category__heading');
        categoryHeading.textContent = data.subcategory;

        let categoryCards = document.querySelector('.category__cards');
        let categoryCardTemplate = document.querySelector('#category__card'),
            categoryCardImg = categoryCardTemplate.content.querySelector('.card__img'),
            categoryCardSupp = categoryCardTemplate.content.querySelector('.desc__supp'),
            categoryCardProd = categoryCardTemplate.content.querySelector('.desc__prod'),
            categoryCardPrice = categoryCardTemplate.content.querySelector('.desc__price'),
            categoryCardId = categoryCardTemplate.content.querySelector('.more-info');
        let cardsLength = data.cards.length;
        
        for (let i = 0; i < cardsLength; i++) {
            categoryCardImg.src = data.cards[i].src;
            categoryCardSupp.textContent = data.cards[i].suppliersName;
            categoryCardProd.textContent = data.cards[i].productName;
            categoryCardPrice.textContent = '$'.concat(data.cards[i].price);
            categoryCardId.setAttribute('data-id', `${data.cards[i].id}`);
            // console.log(data.cards[i], 'data of drawn element');

            let clone = document.importNode(categoryCardTemplate.content, true);
            categoryCards.appendChild(clone);
            let kek = document.querySelectorAll('.cards__card');
            // console.log(kek[i], 'drawn element');
        }
        if (categoryCards.innerHTML.indexOf('card') != -1) {
            let blockMore = document.createElement('div');
            blockMore.className = 'block_width_100';
            blockMore.innerHTML = '<button class="button button-action button-view-more">View More Items</button>';
            categoryCards.appendChild(blockMore);
        }
    }
    drawCategory();

    addToCart(data);
}