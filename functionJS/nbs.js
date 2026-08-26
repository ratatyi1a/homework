function greet(cvh) {
    console.log("Hello, " + cvh + "!");
}
greet('world');

function sayHello(name) {
    console.log("Hello, " + name + "!");
}
sayHello('Bob');
sayHello('Alice');

let a = 185;
let b = 15;
function sum(a, b) {
    return a + b;
}
let result = sum(a, b);
console.log("The sum is: " + result);

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(10));
console.log(isEven(-8));

function maxOfTwo(num1, num2) {
    if (num1 == num2) {
        console.log("Числа равны");
    } else {
        (num1 > num2) ? console.log("максимум: " + num1) : console.log("максимум: " + num2);
    }
}
let num1 = 201;
let num2 = 20;
let max = maxOfTwo(num1, num2);

function getInitials(name, surname) {
    return name[0]+(".") + surname[0]+(".");
}
console.log(getInitials("Саша", "Смирнов")); 

function square(num) {
    return num * num;
}
console.log(square(8)); 

function cube(num) {
    return square(num) * num;
}
console.log(cube(3));

let z = 182;
let x = 192;
const sum2 = (z, x) => z + x;
let result2 = sum2(z, x);
console.log("The sum is: " + result2);

function getFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * getFactorial(num - 1);
}
console.log(getFactorial(10));