let userData = {};
if (localStorage.getItem('userData') != null) {
    userData = JSON.parse(localStorage.getItem('userData'));
}

export function checkoutShippingRender() {
    function checkoutShippingPrep() {
        let fakeChild = document.children[0].children[1].children[0].children[1];
        let categoryCheckoutCreate = document.createElement('section');
        categoryCheckoutCreate.className = 'checkout-shipping';
        document.body.children[0].replaceChild(categoryCheckoutCreate, fakeChild);
        let categoryCheckoutTemplate = document.querySelector('#checkout-shipping'),
            firstNameTemplate = categoryCheckoutTemplate.content.querySelector('#first-name'),
            lastNameTemplate = categoryCheckoutTemplate.content.querySelector('#last-name'),
            cityTemplate = categoryCheckoutTemplate.content.querySelector('#city'),
            companyNameTemplate = categoryCheckoutTemplate.content.querySelector('#company-name'),
            postcodeTemplate = categoryCheckoutTemplate.content.querySelector('#postcode'),
            // countryTemplate = categoryCheckoutTemplate.content.querySelector('select'),
            addressTemplate = categoryCheckoutTemplate.content.querySelector('#address'),
            emailAddressTemplate = categoryCheckoutTemplate.content.querySelector('#email-address'),
            phoneTemplate = categoryCheckoutTemplate.content.querySelector('#phone'),
            createAnAccountTemplate = categoryCheckoutTemplate.content.querySelector('#one-checkbox');
            
        if (userData['first-name'] != undefined) {
            firstNameTemplate.value = userData['first-name'];
        }
        if (userData['last-name'] != undefined) {
            lastNameTemplate.value = userData['last-name'];
        }
        if (userData.city != undefined) {
            cityTemplate.value = userData.city;
        }
        if (userData['company-name'] != undefined) {
            companyNameTemplate.value = userData['company-name'];
        }
        if (userData.postcode != undefined) {
            postcodeTemplate.value = userData.postcode;
        }
        if (userData.address != undefined) {
            addressTemplate.value = userData.address;
        }
        if (userData['email-address'] != undefined) {
            emailAddressTemplate.value = userData['email-address'];
        }
        if (userData.phone != undefined) {
            phoneTemplate.value = userData.phone;
        }
        if (userData.createAnAccount != undefined) {
            createAnAccountTemplate.checked = userData.createAnAccount;
        }
        // if (userData.countrySelected != undefined) {
        //     countryTemplate.value = countryTemplate.options[userData.countrySelected];
        // }
        let clone = document.importNode(categoryCheckoutTemplate.content, true);
        categoryCheckoutCreate.appendChild(clone);
    }
    checkoutShippingPrep();

    function checkoutActions() {
        let backToCartBtn = document.querySelector('.button-to-cart'),
            goToPaymentBtn = document.querySelector('.button-to-payment');

        backToCartBtn.addEventListener('click', () => {
            location.hash = '#cart';
        });
    }
    checkoutActions();

    function checkoutInputs() {
        let checkoutForm = document.querySelector('.shipping');
        let inputsCheckoutForm = checkoutForm.querySelectorAll('input');
        
        inputsCheckoutForm.forEach(elem => {
            elem.addEventListener('change', () => {
                if (elem.id.indexOf('checkbox') == -1) {
                    userData[elem.id] = elem.value;
                    localStorage.setItem('userData', JSON.stringify(userData));
                    // console.log(userData);
                } else {
                    userData.createAnAccount = elem.checked;
                    // console.log(userData);
                    localStorage.setItem('userData', JSON.stringify(userData));
                }
            });
        });
    }
    checkoutInputs();

    // function checkoutSelect() {
    //     let select = document.querySelector('select');
    //     select.addEventListener('change', () => {
    //         userData.countrySelected = select.selectedIndex;
    //         localStorage.setItem('userData', JSON.stringify(userData));
    //     });
    // }
    // checkoutSelect();
}