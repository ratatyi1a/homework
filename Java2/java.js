let x = "lets";
console.warn(x);
x="go";
console.warn(x);
const y = "const";
console.warn(y);
// y="NoConst"; константа не может редактироваться она фиксирована и не может быть изменена
// var не используется так как он использовался в версиях до ES6
 
const numVar = 81 ;
console.warn(numVar, typeof numVar);
const strVar = "строка";
console.warn(strVar, typeof strVar);
const boolVar = true;
console.warn(boolVar, typeof boolVar);
const nullVar = null;
console.warn(nullVar, typeof nullVar);
let undefinedVar;
console.warn(undefinedVar, typeof undefinedVar);
const nanVar = NaN;
console.warn(nanVar, typeof nanVar);
 
const strToNum = Number("123");
console.warn(strToNum, typeof strToNum);
const numToStr = String(123);
console.warn(numToStr, typeof numToStr);
console.warn(String(undefined), Number(undefined));
// undefined если перевести в число то будет NaN и обратно если в строку то будет "undefined"
console.warn(String(null), Number(null));
// нулл при переводе в строки становится нул если в число то ноль
 
let dynamicVar = 10;
console.warn(dynamicVar, typeof dynamicVar);
dynamicVar = "теперь строка";
console.warn(dynamicVar, typeof dynamicVar);
// переменная может менять свой тип в зависимости от значения
 
const userName = prompt("Введите ваше имя:");
const userAge = prompt("Введите ваш возраст:");
console.warn(userName, userAge);
 