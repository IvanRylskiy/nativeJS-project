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