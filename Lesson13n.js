"use strict";
//alert('HYI');
//const result = confirm('are you here?');
//console.log(result);

//const answer = prompt('18 есть?', '18');
//console.log(answer);

const answers = [];

answers [0] = prompt('Ваше имя?', '');
answers [1] = prompt('Ваша фамилия?', '');
answers [2] = +prompt('Ваш возраст?', '');  //динамическая типизация, тип файла будет числовой, а не строка

document.write(answers);