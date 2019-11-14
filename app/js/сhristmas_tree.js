// First Task
// Реализовать подсветку случайного элемента при загрузке;
// Каждые 2 секунды подсвечивать новый элемент случайным цветом;
// Каждые 2 секунды снимать подсветку со случайного элемента.

const allElements = document.querySelectorAll('*');
const intervalAddColor = 2000;
const intervalRemoveColor = 2000;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    
    return '#'.concat(r.toString(16), g.toString(16), b.toString(16));
}

function addColor(elements) {
    elements[getRandomInt(0, allElements.length)].style.backgroundColor = randomColor();
}

function removeColor(elements) {
    elements[getRandomInt(0, allElements.length)].removeAttribute('style');
}

setInterval(() => {
    addColor(allElements);
}, intervalAddColor);

setInterval(() => {
    removeColor(allElements);
}, intervalRemoveColor);