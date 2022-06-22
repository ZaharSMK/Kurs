// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i<=10; i++) {
    console.log (i);
    }
}

// Место для второй задачи
function secondTask() {
        // Пишем решение вот тут
for ( let i = 20; i>10; i--) {
    console.log(i);
    if (i === 13) {
        break;
    }
}    
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let num = 2;
while (num <=16) {
    if (num % 2 === 0) {
        num++;
    } else {
        console.log(num);
        num++;
    }
}
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
 for (let i = 0; i <= 5; i++) {
    arrayOfNumbers [i] = i+5;
 }
 console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;
}