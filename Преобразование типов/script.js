// Строковое преобразование
let value = true;
// Проверка типа (Тип boolean)
console.log(typeof (value));
// Преобразовываем с boolean - string
value = String(value);
console.log(typeof (value));
// Теперь у нас переменная value - стала string типа (была boolean)

// Численное преобразование
let a = "10";
let b = "20";
console.log(a + b);
console.log(typeof (a));
a = Number(a);
b = Number(b);
console.log(a + b);
// Я тебя умоляю пиши циферки НЕ в скобочках что-бы небыло ошибок
// Все математические операции приводят к мат. вычислениям КРОМЕ "+"

// Преобразование строки в целове число
a = "12 штук";
a = parseInt(a)
console.log(a + 10);

// Преобразование строки в число с плавающей точкой или запятой
b = "12.25 банок колы";
b = parseFloat(b);
console.log(b + 10);

// Логическое преобразование
let x = "Ок";
let y = "ok";

x = Boolean(x);
y = Boolean(y);

console.log(`x = ${x}`);
console.log(`y = ${y}`);
// 0 - false; Nan - false; Null - false; Undefined - false; Всё что относится к 0 - false


alert('Привет');

let result = prompt('Сколько вам лет?', 18);

console.log(result);
console.log(typeof (result));

let isBoss = confirm("Ты здесь главный?");
console.log(isBoss);
console.log(typeof (isBoss));