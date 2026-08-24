let number=prompt("Введите число: ");
if (number>10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
}


let UserCon=confirm("Вы согласны удалить файл?");
if (UserCon==true) {
    alert("Файл удален");
}
else {
    alert("Удаление отменено");
}


let age=prompt("Введите возраст: ");
if (age<18) {
    console.log("Вы ещё подросток");
} 
else if (age<=30) {
    console.log("Вы молодой взрослый");
}
else {
    console.log("Вы взрослый");
}


let number1=prompt("Введите число: ");
let fasd=(number1%2==0) ? "Число четное" : "Число нечетное";
alert(fasd);

let weak=prompt("Введите день недели: ");
switch (weak) {
    case "1":
        console.log("понедельник");
        break;
    case "2":
        console.log("вторник");
        break;
    case "3":
        console.log("среда");
        break;
    case "4":
        console.log("четверг");
        break;
    case "5":
        console.log("пятница");
        break;
    case "6":
        console.log("суббота");
        break;
    case "7":
        console.log("воскресенье");
        break;
    default:
        console.log("Такого дня недели не существует");
}

let SB=Number(prompt("Введите число: "));
let SB2=Number(prompt("Введите число: "));
if (SB==SB2) {
    console.log("Числа равны");
} else {
    (SB>SB2) ? console.log("Первое число больше второго") : console.log("Второе число больше первого");
}