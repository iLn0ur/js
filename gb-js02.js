'use strict'
// 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 префиксный инкремент - сначала идёт сложение, потом присвоение результата
// d = b++; alert(d);           // 1 постфиксный инкремент - сначала присвоение, потом увеличение b на единицу
// c = (2+ ++a); alert(c);      // 5 префиксный инкремент - увелечение а на 1, а потом "+ 2" и просвоение с
// d = (2+ b++); alert(d);      // 4 постфиксный инркемент - увеличение b происходит после оперции "+2 и присвоение d
// alert(a);                    // 3 вывод текущего значения a
// alert(b);                    // 3 вывод текущего значения b

// 2
// var a = 2;
// var x = 1 + (a *= 2);        // 5

//3
var a = 100;
var b = 200;
if ((a < 0) && (b < 0)) {
    console.log(`${a} - ${b} = ${a - b}`);
} 
else if ((a => 0) && ( b => 0)) {
    console.log(`${a} * ${b} = ${a * b}`);
}
else {
    console.log(`${a} + ${b} = ${a + b}`);
};

//4

var x = 16;
switch (x) {
    case 0:
        console.log('0')    
    case 1:
        console.log('1')
    case 2:
        console.log('2')
    case 3:
        console.log('3')
    case 4:
        console.log('4')    
    case 5:
        console.log('5')
    case 6:
        console.log('6')
    case 7:
        console.log('7')
    case 8:
        console.log('8')    
    case 9:
        console.log('9')
    case 10:
        console.log('10')
    case 11:
        console.log('11')
    case 12:
        console.log('12')
    case 13:
        console.log('13')
    case 14:
        console.log('14')
    case 15:
        console.log('15')
        break;
    default:
        console.log('not in range')
        break;
}

//5

var x = 4, y = 5;

function sum(x, y) {
    return (x + y);
}

function diff(x, y) {
    return (x - y);
}

function mult(x, y) {
    return (x * y);
}

function divi(x, y) {
    return (x / y);
}

console.log('сумма ', sum(x,y))
console.log('разность ', diff(x, y))
console.log('деление ', divi(x, y))
console.log('произведение ', mult(x, y))

//6

function mathOperation(x, y, sign) {
    switch (sign) {
        case '+':
            console.log(sum(x, y));
            break;
        case '-':
            console.log(diff(x, y));
            break;
        case '*':
            console.log(mult(x, y));
            break;
        case '/':
            console.log(divi(x, y));
            break;
        default:
            console.log('not math')
            break;

    }
}

mathOperation(10, 2, '*');

// **

function power(val, pow) {
    if(pow == 1) {
        return val;
    }

    return (power(val, (pow - 1))*val)
}

console.log(power(2, 16))




