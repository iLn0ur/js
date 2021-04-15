//1

var simple_numbers = Array();
var prostoe = true;
var x = 1

while(x < 100) {
    for(let num of simple_numbers) {
        if ((Number.isInteger(x/num))&&(num != 1)){
            prostoe = false
            break
        }
    }
    if (prostoe){
        simple_numbers.push(x)
    }
    prostoe = true
    x++
}

console.log("простые числа")
for(let num of simple_numbers) {
    console.log(num)
    }

//2

var basket = [{goods:"manuchao", price:2}, {goods:"chaomanu", price:4}];

function prices_basket(basket){
    var prices = 0
    for(let elem of basket){
        prices += elem.price
    }
    return prices
}

console.log("стоимость корзины = ", prices_basket(basket))

//3

for(let x=0; x < 10; console.log(x++)){}

//4
var snezhinka = "*"
for(let x=1; x <= 20; x++){
    console.log(snezhinka)
    snezhinka += "*"
}