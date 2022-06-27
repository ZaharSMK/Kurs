// Место для первой задачи
function sayHello(Name) {
    return `Привет, ${Name}!`;
     
}
console.log(sayHello ('Илья'));

// Место для второй задачи
function returnNeighboringNumbers(num) {
    let mas = [];
    mas[0] = num - 1;
    mas[1] = num;
    mas[2] = num + 1;
    return mas;

    // return [num - 1, num, num + 1]
}

console.log(returnNeighboringNumbers(6));

// Место для третьей задачи
function getMathResult(a, b) {  
    let res = '';
    let str = [];
    if ((typeof(b) !== 'number') || (b <= 0)) {
        res = a;
    } else {
        for (let i = 1; i <= b; i++) {
            str[i-1]= a * i;
            if (i < b) {
                res = res + `${str[i-1]}---`;
            } else {
                if (i == b) {
                    res += `${str[i-1]}`;       
                }
            } 
        }
    }

    return res;
}
console.log(getMathResult(5, 5));