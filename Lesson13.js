"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log("Don't OK");
}

const num = 50;
if (num < 49) {
    console.log('Мало!');
} else if (num > 100) {
    console.log('Много!');
} else {
    console.log('Нормально!' );
}

(num === 50) ? console.log('Ok!') : console.log('Error!');


switch (num) {
    case 49:  console.log('не Верно');
        break;
    case 100: console.log('Тоже не верно');
        break;
    case 50: console.log('Вот теперь верно!');
    break;
    default: console.log('Не в этот раз' );
        break;
}