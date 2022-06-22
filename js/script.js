let result = '*';
let probel = 5;
const lenght = 12;
for (let i = 1; i < lenght; i++) {
    for (let k = probel; k >= 0; k--){
        result += ' ';
        for (let j = 0; j < i; j++) {
            result += '**';
        }
    }
    

    result += '\n';
}


console.log(result);