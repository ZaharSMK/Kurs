"use strict";

let currUsd = 53;
let currEur = 56;
let discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promo (result){
    console.log(result * discount);
}

const res = convert(100, currUsd);  // Промежуточная переменная для более удобного использования
promo(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return  // Функция досрочнл полностью прекратила работу, Done не покажет. Вернет undefiend
    }
    console.log('DOne!');
}
test();