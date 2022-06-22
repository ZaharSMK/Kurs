// Задание 1

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);


// Задание 2
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) =='number') {
//         result[i] = data[i]*2;
//     } else {
//         result[i] = data[i]+' - done';
//     }
// }
// console.log(data);
// console.log(result);


// Задание 3
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// first: for (let i = data.length-1; i >= 0; i--) {
//             for (let j = 0; j <= data.length-1; j++) {
//                 if (j == result.length) {
//                     result[j] = data[i];
//                     continue first;
//                 }
//             }
// }
// console.log(data);
// console.log(result);

// Сильно проще задание 3
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
}

console.log(result);