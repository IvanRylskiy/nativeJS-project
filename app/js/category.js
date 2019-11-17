export function category(data) {
    let fakeChild = document.children[0].children[1].children[0].children[1];
    let categorySectionCreate = document.createElement('section');
    categorySectionCreate.className = 'category';
    categorySectionCreate.innerHTML =   `<section class="location">
                                            <span class="location-item location__item"><a href="#home" class="location-item__link"></a></span>
                                            <svg class="location__icon">
                                                <use xlink:href="assets/img/icons.svg#arrow-right"></use>
                                            </svg>
                                            <span class="location-item location__item"><a href="#" class="location-item__link"></a></span>
                                        </section>
                                        <h2 class="category__heading"></h2>
                                        <div class="cards category__cards"></div>`;

    document.body.children[0].replaceChild(categorySectionCreate, fakeChild);
}