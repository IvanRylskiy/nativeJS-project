// Third Task
// При наведении мыши на категорию меню всплывает
// Содержимое всплывающего меню формируется динамиечски в зависимости от выбранной категории

import { request } from './request.js';

export function menu () {
    let navLiItems = document.querySelectorAll('.nav-list__item');

    navLiItems.forEach(elements => {
        elements.addEventListener('mouseenter', () => {
            if (elements.children[1] == undefined) {
            const menuTemplate = document.querySelector('#menu');
            let menuTitle = menuTemplate.content.querySelector('.naming__heading'),
                menuDescription = menuTemplate.content.querySelector('.naming__info'),
                menuQuantity = menuTemplate.content.querySelector('.top-menu__item-quan'),
                menuCategories = menuTemplate.content.querySelectorAll('.list__link');

            let menuCategoriesLength = menuCategories.length;
            
            function drawMenu(data) {
                menuTitle.textContent = `${data.title}`;
                menuDescription.textContent = `${data.description}`;
                menuQuantity.textContent = `${data.quantity}`;
                for (let j = 0; j < menuCategoriesLength; j++) {
                    if (data.subcategories[j].name != undefined) {
                        menuCategories[j].textContent = `${data.subcategories[j].name}`;
                        menuCategories[j].href = `${data.subcategories[j].link}`;
                    }
                }
                let clone = document.importNode(menuTemplate.content, true);
                elements.appendChild(clone);

                function menuAddMargin() {
                    let menuOpened = document.querySelector('.menu');
                    let responseTitle = data.title;
                    if (responseTitle == 'Furniture') {
                        menuOpened.style.marginLeft = '148px';
                    }
                    if (responseTitle == 'Lighting') {
                        menuOpened.style.marginLeft = '272px';
                    }
                    if (responseTitle == 'Home Accents') {
                        menuOpened.style.marginLeft = '385px';
                    }
                    if (responseTitle == 'Rugs') {
                        menuOpened.style.marginLeft = '545px';
                    }
                    if (responseTitle == 'Outdoors') {
                        menuOpened.style.marginLeft = '635px';
                    }
                    if (responseTitle == 'Holidays') {
                        menuOpened.style.marginLeft = '210px';
                    }
                    if (responseTitle == 'Gifts') {
                        menuOpened.style.marginLeft = '300px';
                    }
                    if (responseTitle == 'Events') {
                        menuOpened.style.marginLeft = '400px';
                    }
                }
                menuAddMargin();
                closeMenuOnLink();
            }
            
            let currentCategory = elements.dataset.category;
            let currentCategoryUrl = `http://127.0.0.1:5500/JS/projectOne/app/data/${currentCategory}.json`;
            request(currentCategoryUrl, drawMenu);
            }
        });
    });
    
    navLiItems.forEach(elements => {
        elements.addEventListener('mouseleave', () => {
            if (elements.children[1] != undefined) {
                let menu = document.querySelector('.menu');
                elements.removeChild(menu);
            }
        });
    });
}

function closeMenuOnLink() {
    let menuLinks = document.querySelectorAll('.list__link');
    menuLinks.forEach(elems => {
        elems.addEventListener('click', () => {
            let menu = document.querySelector('.menu');
            menu.remove();
        });
    });
}