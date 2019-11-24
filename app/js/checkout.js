import { cartSum } from './cart.js';

function loading(hash) {
    let loader = document.querySelector('.loader-checkout');
    loader.classList.remove('display_none');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let minTime = 1000;
    let maxTime = 5000;

    let randomTime = getRandomInt(minTime, maxTime);
    // console.log(randomTime);

    let paymentTimer = setTimeout(() => {
        location.hash = hash;
        loader.classList.add('display_none');
    }, randomTime);
}

export function checkoutShippingRender() {
    let userData = {};
    if (localStorage.getItem('userData') != null) {
        userData = JSON.parse(localStorage.getItem('userData'));
    }

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
            goToPaymentBtn = document.querySelector('.button-to-payment'),
            checkoutPaymentLink = document.querySelector('.checkout-payment-link');

        backToCartBtn.addEventListener('click', () => {
            location.hash = '#cart';
        });

        let checkoutForm = document.querySelector('.shipping');
        let inputsCheckoutForm = checkoutForm.querySelectorAll('input');
        let error = checkoutForm.querySelectorAll('.error');

        let a = false;
        let hash = '#checkout_payment';

        function checkInputs() {
            for (let i = 0; i < inputsCheckoutForm.length; i++) {
                if (inputsCheckoutForm[i].value == "") {
                    error[i].classList.remove('display_none');
                    a = false;
                    break;
                } else {
                    a = true;
                }
            }
            
            if (a) {
                loading(hash);
            }
        }

        goToPaymentBtn.addEventListener('click', checkInputs);
        checkoutPaymentLink.addEventListener('click', checkInputs);
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

export function checkoutPaymentRender() {
    function checkoutPaymentPrep() {
        let fakeChild = document.children[0].children[1].children[0].children[1];
        let categoryPaymentCreate = document.createElement('section');
        categoryPaymentCreate.className = 'checkout-shipping';
        document.body.children[0].replaceChild(categoryPaymentCreate, fakeChild);
        let categoryPaymentTemplate = document.querySelector('#checkout-payment');
        let clone = document.importNode(categoryPaymentTemplate.content, true);
        categoryPaymentCreate.appendChild(clone);
    }
    checkoutPaymentPrep();

    function checkoutPaymentItems() {
        let paymentItemTemplate = document.querySelector('#checkout-payment-item'),
            paymentItemImg = paymentItemTemplate.content.querySelector('.payment__img'),
            paymentItemProd = paymentItemTemplate.content.querySelector('.payment__prod'),
            paymentItemQuan = paymentItemTemplate.content.querySelector('.payment__quan'),
            paymentItemSum = paymentItemTemplate.content.querySelector('.payment__sum');

        let paymentBody = document.querySelector('.payment__tbody');

        let localStorageItems = JSON.parse(localStorage.getItem('items'));
        if (localStorageItems != null) {
            for (let i = 0; i < localStorageItems.length; i++) {
                paymentItemImg.src = localStorageItems[i].src;
                paymentItemProd.textContent = localStorageItems[i].productName;
                paymentItemQuan.value = localStorageItems[i].quantity;
                paymentItemQuan.setAttribute('data-id', localStorageItems[i].id);
                paymentItemSum.textContent = '$'.concat(+(localStorageItems[i].price) * +(localStorageItems[i].quantity));

                let clone = document.importNode(paymentItemTemplate.content, true);
                paymentBody.appendChild(clone);
            }
        }

        let payBtn = document.querySelector('.button-action__pay'),
            shippingCharge = document.querySelector('.cart__td-charge-money').textContent.split('$')[1],
            sum = localStorage.getItem('sum');
        payBtn.textContent = 'Pay $'.concat(+(sum) + +(shippingCharge));
    }
    checkoutPaymentItems();

    function checkoutPaymentActions() {
        let backToShippingBtn = document.querySelector('.button-to-shipping'),
            payBtn = document.querySelector('.button-action__pay');

        let hash = '#checkout_success';

        backToShippingBtn.addEventListener('click', () => {
            location.hash = '#checkout_shipping';
        });

        payBtn.addEventListener('click', () => {
            loading(hash);
            localStorage.clear();
        });
    }
    checkoutPaymentActions();
}

export function checkoutSuccessRender() {
    function checkoutSuccessDraw() {
        let checkoutSuccessTemplate = document.querySelector('#checkout-success');
        let fakeChild = document.children[0].children[1].children[0].children[1];
        let clone = document.importNode(checkoutSuccessTemplate.content, true);
        document.body.children[0].replaceChild(clone, fakeChild);
    }
    checkoutSuccessDraw();

    cartSum();

    function checkoutSuccessActions() {
        let btnBackToShopping = document.querySelector('.button__back-to-shopping');
        btnBackToShopping.addEventListener('click', () => {
            location.hash = '#home';
        });
    }
    checkoutSuccessActions();
}