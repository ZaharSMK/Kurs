"use strict";
let incr = 10,
    decr = 10;
//++incr;
//--decr;
console.log(++incr); // работает только в префиксной форме!
console.log(--decr);

console.log(5 % 2); // остаток от деления
console.log(2*4 == '8');  // строгое сравнение, вместе с типом данных
console.log(2 + 2 * 2 > 4);

const isChecked = false,
    isClose = false;
console.log(isChecked && isClose);

// const isChecked = false,
//     isClose = false;
// console.log(isChecked || !isClose);
