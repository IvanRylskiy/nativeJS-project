// Third Task
// При наведении мыши на категорию меню всплывает
// Содержимое всплывающего меню формируется динамиечски в зависимости от выбранной категории

let navInfo = [
    {
        title: 'Home Decor',
        description: 'Create & live your unique style',
        quantity: '25478 items',
        subcategories: 
        [
            { name: 'Pots & Pans', link: '#' },
            { name: 'Pressure Cookers', link: '#' },
            { name: 'Kitchen Tools', link: '#' },
            { name: 'Gas Stoves', link: '#' },
            { name: 'Dining & Serving', link: '#' },
            { name: 'Coffee Mugs', link: '#' },
            { name: 'Dinnerware & Crockery', link: '#' },
            { name: 'Bar & Glassware', link: '#' },
            { name: 'Kitchen Storage', link: '#' },
            { name: 'Lunch Boxes', link: '#' },
            { name: 'Flasks & Casseroles', link: '#' },
            { name: 'Kitchen Containers', link: '#' },
            { name: 'Furniture', link: '#' },
            { name: 'Beds', link: '#' },
            { name: 'Sofas', link: '#' },
            { name: 'Dining tables & Sets', link: '#' },
            { name: 'Mattresses', link: '#' },
            { name: 'Tables', link: '#' },
            { name: 'Chairs', link: '#' },
            { name: 'Bean Bags', link: '#' },
            { name: 'Shoe Racks', link: '#' },
            { name: 'TV Units & Cabinets', link: '#' },
            { name: 'Wardrobes' },
            { name: '', link: '#' }
        ],
    },
    {
        title: 'Furniture',
        description: 'Create & live your unique style',
        quantity: '25478 items',
        subcategories: 
        [
            { name: 'Pots & Pans', link: '#' },
            { name: 'Pressure Cookers', link: '#' },
            { name: 'Kitchen Tools', link: '#' },
            { name: 'Gas Stoves', link: '#' },
            { name: 'Dining & Serving', link: '#' },
            { name: 'Coffee Mugs', link: '#' },
            { name: 'Dinnerware & Crockery', link: '#' },
            { name: 'Bar & Glassware', link: '#' },
            { name: 'Kitchen Storage', link: '#' },
            { name: 'Lunch Boxes', link: '#' },
            { name: 'Flasks & Casseroles', link: '#' },
            { name: 'Kitchen Containers', link: '#' },
            { name: 'Furniture', link: '#' },
            { name: 'Beds', link: '#' },
            { name: 'Sofas', link: '#' },
            { name: 'Dining tables & Sets', link: '#' },
            { name: 'Mattresses', link: '#' },
            { name: 'Tables', link: '#' },
            { name: 'Chairs', link: '#' },
            { name: 'Bean Bags', link: '#' },
            { name: 'Shoe Racks', link: '#' },
            { name: 'TV Units & Cabinets', link: '#' },
            { name: 'Wardrobes' },
            { name: '', link: '#' }
        ],
    },
    {
        title: 'Lighting',
        description: 'Create & live your unique style',
        quantity: '25478 items',
        subcategories: 
        [
            { name: 'Pots & Pans', link: '#' },
            { name: 'Pressure Cookers', link: '#' },
            { name: 'Kitchen Tools', link: '#' },
            { name: 'Gas Stoves', link: '#' },
            { name: 'Dining & Serving', link: '#' },
            { name: 'Coffee Mugs', link: '#' },
            { name: 'Dinnerware & Crockery', link: '#' },
            { name: 'Bar & Glassware', link: '#' },
            { name: 'Kitchen Storage', link: '#' },
            { name: 'Lunch Boxes', link: '#' },
            { name: 'Flasks & Casseroles', link: '#' },
            { name: 'Kitchen Containers', link: '#' },
            { name: 'Furniture', link: '#' },
            { name: 'Beds', link: '#' },
            { name: 'Sofas', link: '#' },
            { name: 'Dining tables & Sets', link: '#' },
            { name: 'Mattresses', link: '#' },
            { name: 'Tables', link: '#' },
            { name: 'Chairs', link: '#' },
            { name: 'Bean Bags', link: '#' },
            { name: 'Shoe Racks', link: '#' },
            { name: 'TV Units & Cabinets', link: '#' },
            { name: 'Wardrobes' },
            { name: '', link: '#' }
        ],
    },
    {
        title: 'Home Accents',
        description: 'Create & live your unique style',
        quantity: '25478 items',
        subcategories: 
        [
            { name: 'Pots & Pans', link: '#' },
            { name: 'Pressure Cookers', link: '#' },
            { name: 'Kitchen Tools', link: '#' },
            { name: 'Gas Stoves', link: '#' },
            { name: 'Dining & Serving', link: '#' },
            { name: 'Coffee Mugs', link: '#' },
            { name: 'Dinnerware & Crockery', link: '#' },
            { name: 'Bar & Glassware', link: '#' },
            { name: 'Kitchen Storage', link: '#' },
            { name: 'Lunch Boxes', link: '#' },
            { name: 'Flasks & Casseroles', link: '#' },
            { name: 'Kitchen Containers', link: '#' },
            { name: 'Furniture', link: '#' },
            { name: 'Beds', link: '#' },
            { name: 'Sofas', link: '#' },
            { name: 'Dining tables & Sets', link: '#' },
            { name: 'Mattresses', link: '#' },
            { name: 'Tables', link: '#' },
            { name: 'Chairs', link: '#' },
            { name: 'Bean Bags', link: '#' },
            { name: 'Shoe Racks', link: '#' },
            { name: 'TV Units & Cabinets', link: '#' },
            { name: 'Wardrobes' },
            { name: '', link: '#' }
        ],
    },
    {
        title: 'Rugs',
        description: 'Create & live your unique style',
        quantity: '25478 items',
        subcategories: 
        [
            { name: 'Pots & Pans', link: '#' },
            { name: 'Pressure Cookers', link: '#' },
            { name: 'Kitchen Tools', link: '#' },
            { name: 'Gas Stoves', link: '#' },
            { name: 'Dining & Serving', link: '#' },
            { name: 'Coffee Mugs', link: '#' },
            { name: 'Dinnerware & Crockery', link: '#' },
            { name: 'Bar & Glassware', link: '#' },
            { name: 'Kitchen Storage', link: '#' },
            { name: 'Lunch Boxes', link: '#' },
            { name: 'Flasks & Casseroles', link: '#' },
            { name: 'Kitchen Containers', link: '#' },
            { name: 'Furniture', link: '#' },
            { name: 'Beds', link: '#' },
            { name: 'Sofas', link: '#' },
            { name: 'Dining tables & Sets', link: '#' },
            { name: 'Mattresses', link: '#' },
            { name: 'Tables', link: '#' },
            { name: 'Chairs', link: '#' },
            { name: 'Bean Bags', link: '#' },
            { name: 'Shoe Racks', link: '#' },
            { name: 'TV Units & Cabinets', link: '#' },
            { name: 'Wardrobes' },
            { name: '', link: '#' }
        ],
    },
    {
        title: 'Outdoors',
        description: 'Create & live your unique style',
        quantity: '25478 items',
        subcategories: 
        [
            { name: 'Pots & Pans', link: '#' },
            { name: 'Pressure Cookers', link: '#' },
            { name: 'Kitchen Tools', link: '#' },
            { name: 'Gas Stoves', link: '#' },
            { name: 'Dining & Serving', link: '#' },
            { name: 'Coffee Mugs', link: '#' },
            { name: 'Dinnerware & Crockery', link: '#' },
            { name: 'Bar & Glassware', link: '#' },
            { name: 'Kitchen Storage', link: '#' },
            { name: 'Lunch Boxes', link: '#' },
            { name: 'Flasks & Casseroles', link: '#' },
            { name: 'Kitchen Containers', link: '#' },
            { name: 'Furniture', link: '#' },
            { name: 'Beds', link: '#' },
            { name: 'Sofas', link: '#' },
            { name: 'Dining tables & Sets', link: '#' },
            { name: 'Mattresses', link: '#' },
            { name: 'Tables', link: '#' },
            { name: 'Chairs', link: '#' },
            { name: 'Bean Bags', link: '#' },
            { name: 'Shoe Racks', link: '#' },
            { name: 'TV Units & Cabinets', link: '#' },
            { name: 'Wardrobes' },
            { name: '', link: '#' }
        ],
    },
    {
        title: 'Holidays',
        description: 'Create & live your unique style',
        quantity: '25478 items',
        subcategories: 
        [
            { name: 'Pots & Pans', link: '#' },
            { name: 'Pressure Cookers', link: '#' },
            { name: 'Kitchen Tools', link: '#' },
            { name: 'Gas Stoves', link: '#' },
            { name: 'Dining & Serving', link: '#' },
            { name: 'Coffee Mugs', link: '#' },
            { name: 'Dinnerware & Crockery', link: '#' },
            { name: 'Bar & Glassware', link: '#' },
            { name: 'Kitchen Storage', link: '#' },
            { name: 'Lunch Boxes', link: '#' },
            { name: 'Flasks & Casseroles', link: '#' },
            { name: 'Kitchen Containers', link: '#' },
            { name: 'Furniture', link: '#' },
            { name: 'Beds', link: '#' },
            { name: 'Sofas', link: '#' },
            { name: 'Dining tables & Sets', link: '#' },
            { name: 'Mattresses', link: '#' },
            { name: 'Tables', link: '#' },
            { name: 'Chairs', link: '#' },
            { name: 'Bean Bags', link: '#' },
            { name: 'Shoe Racks', link: '#' },
            { name: 'TV Units & Cabinets', link: '#' },
            { name: 'Wardrobes' },
            { name: '', link: '#' }
        ],
    },
    {
        title: 'Gifts',
        description: 'Create & live your unique style',
        quantity: '25478 items',
        subcategories: 
        [
            { name: 'Pots & Pans', link: '#' },
            { name: 'Pressure Cookers', link: '#' },
            { name: 'Kitchen Tools', link: '#' },
            { name: 'Gas Stoves', link: '#' },
            { name: 'Dining & Serving', link: '#' },
            { name: 'Coffee Mugs', link: '#' },
            { name: 'Dinnerware & Crockery', link: '#' },
            { name: 'Bar & Glassware', link: '#' },
            { name: 'Kitchen Storage', link: '#' },
            { name: 'Lunch Boxes', link: '#' },
            { name: 'Flasks & Casseroles', link: '#' },
            { name: 'Kitchen Containers', link: '#' },
            { name: 'Furniture', link: '#' },
            { name: 'Beds', link: '#' },
            { name: 'Sofas', link: '#' },
            { name: 'Dining tables & Sets', link: '#' },
            { name: 'Mattresses', link: '#' },
            { name: 'Tables', link: '#' },
            { name: 'Chairs', link: '#' },
            { name: 'Bean Bags', link: '#' },
            { name: 'Shoe Racks', link: '#' },
            { name: 'TV Units & Cabinets', link: '#' },
            { name: 'Wardrobes' },
            { name: '', link: '#' }
        ],
    },
    {
        title: 'Events',
        description: 'Create & live your unique style',
        quantity: '25478 items',
        subcategories: 
        [
            { name: 'Pots & Pans', link: '#' },
            { name: 'Pressure Cookers', link: '#' },
            { name: 'Kitchen Tools', link: '#' },
            { name: 'Gas Stoves', link: '#' },
            { name: 'Dining & Serving', link: '#' },
            { name: 'Coffee Mugs', link: '#' },
            { name: 'Dinnerware & Crockery', link: '#' },
            { name: 'Bar & Glassware', link: '#' },
            { name: 'Kitchen Storage', link: '#' },
            { name: 'Lunch Boxes', link: '#' },
            { name: 'Flasks & Casseroles', link: '#' },
            { name: 'Kitchen Containers', link: '#' },
            { name: 'Furniture', link: '#' },
            { name: 'Beds', link: '#' },
            { name: 'Sofas', link: '#' },
            { name: 'Dining tables & Sets', link: '#' },
            { name: 'Mattresses', link: '#' },
            { name: 'Tables', link: '#' },
            { name: 'Chairs', link: '#' },
            { name: 'Bean Bags', link: '#' },
            { name: 'Shoe Racks', link: '#' },
            { name: 'TV Units & Cabinets', link: '#' },
            { name: 'Wardrobes' },
            { name: '', link: '#' }
        ],
    },
];

const menuTemplate = document.querySelector('#menu');
let menuTitle = menuTemplate.content.querySelector('.naming__heading'),
    menuDescription = menuTemplate.content.querySelector('.naming__info'),
    menuQuantity = menuTemplate.content.querySelector('.top-menu__item-quan'),
    menuCategories = menuTemplate.content.querySelectorAll('.list__link');

const navLiItems = document.querySelectorAll('.nav-list__item');
let navLiItemsLength = navLiItems.length;
let menuCategoriesLength = menuCategories.length;

function drawMenu() {
    for (let i = 0; i < navLiItemsLength; i++) {
        menuTitle.textContent = `${navInfo[i].title}`;
        menuDescription.textContent = `${navInfo[i].description}`;
        menuQuantity.textContent = `${navInfo[i].quantity}`;
        for (let j = 0; j < menuCategoriesLength; j++) {
            if (navInfo[i].subcategories[j].name != undefined) {
                menuCategories[j].textContent = `${navInfo[i].subcategories[j].name}`;
                menuCategories[j].href = `${navInfo[i].subcategories[j].link}`;
            }
        }
        let clone = document.importNode(menuTemplate.content, true);
        navLiItems[i].appendChild(clone);
    }
}
drawMenu();

function menuAddMargin() {
    navLiItems.forEach (elements => {
        if (elements.children[0].dataset.category == 2) {
            elements.children[1].style.marginLeft = '148px';
        }
        if (elements.children[0].dataset.category == 3) {
            elements.children[1].style.marginLeft = '272px';
        }
        if (elements.children[0].dataset.category == 4) {
            elements.children[1].style.marginLeft = '385px';
        }
        if (elements.children[0].dataset.category == 5) {
            elements.children[1].style.marginLeft = '545px';
        }
        if (elements.children[0].dataset.category == 6) {
            elements.children[1].style.marginLeft = '635px';
        }
        if (elements.children[0].dataset.category == 7) {
            elements.children[1].style.marginLeft = '210px';
        }
        if (elements.children[0].dataset.category == 8) {
            elements.children[1].style.marginLeft = '300px';
        }
        if (elements.children[0].dataset.category == 9) {
            elements.children[1].style.marginLeft = '400px';
        }
    });
}
menuAddMargin();

function showMenu() {
    this.children[1].classList.remove('menu_display-none');
}

function hideMenu() {
    this.children[1].classList.add('menu_display-none');
}

navLiItems.forEach(elements => {
    elements.addEventListener('mouseenter', showMenu, false);
    elements.addEventListener('mouseleave', hideMenu, false);
});