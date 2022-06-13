"use strict";
<<<<<<< HEAD
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""),
    PersonalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt("На сколько оцените его?", "");
PersonalMovieDB.movies[a] = b;
PersonalMovieDB.movies[c] = d;

console.log(PersonalMovieDB);
=======
let incr = 10,
    decr = 10;
//++incr;
//--decr;
console.log(++incr); // работает только в префиксной форме!
console.log(--decr);

console.log(5 % 2); // остаток от деления
console.log(2*4 === '8');  // строгое сравнение, вместе с типом данных
console.log(2 + 2 * 2 > 4);

const isCheck = false,
    isClose = false;
console.log(isCheck && isClose);  // оператор И - оба правда

const isChecked = false,
    isClosed = false;
console.log(isChecked || !isClosed);  // оператор ИЛИ - хотя бы один правда
>>>>>>> 8413a51cf99d08e481c8ff40ac7da558f22e4f02
