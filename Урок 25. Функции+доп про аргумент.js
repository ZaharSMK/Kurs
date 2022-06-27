"use strict";

function showFirstMessage(text) {   // В круглых скобках аргумент, необязателен! При такой записи возможен вызов в коде до создания
    console.log(text);              // Переменные созданные внутри функции работают только внутри функции
}                                   // Замыкание функции - сама функция, со всеми внешними переменным, которые ей доступны

showFirstMessage('Hi!');  

function calc(a, b) {
    return (a + b);                 // Возвращает значение из функции "во внешний мир". Все, что после него - не будет работать
}  
console.log(calc (5, 9));

function ret() {
    let num = 50;
    //
    return num;                     // через return можно "снаружи" получить значение созданной внутри функциии переменной
}

const anotherNum = ret();           
console.log(anotherNum);

const logger = function() {         // При такой записи вызвать можно только после создания
    console.log('Hello');
};

logger();

const calcul = (a, b) => {  // Не имеет контектста вызова. При действиях в одну строку {} не нужны. При одном аргументе () nj;t не нужны
     return a + b;          // Если return ytn? функция ВСЕГДА вернет undefiend 
    }; 
console.log(calcul (5, 8));

"use strict";

let currUsd = 53;
let currEur = 56;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(100, currUsd);
convert(100, currEur);