// LESSON 1

//Комментарий в JS через два слэша однострочный


/*
* - Asterisk
Многострочный 
комментарий*/

//Типы данных

// 8 шт

// 1. Number - Число => 123 3.53, 23498607.13,
// 2. String - Строка => 'sf', "sfg", `zdfg` Любое число помещённое в три вида ковычек, является String а не Number, `24`
// 3. Boolean - булевский => true либо false
// 4. Null - ничего => null
// 5. Underfined - неопределённый, неназначенный => underfined
// 6. BigInt - большое число => 123n
// 7. Symbol - символ => уникальный идентификатор 
// 8. Object - объект (пользовательский или встроенный) => (model: 'BMW', year: '2000' )

// Объявление переменных 

// var, let, const
// можно начинать с _
// регистр букв важен
//camelCase - стиль написания слов => userNameLogo
//PascalCase - каждое слово с заглавной буквы
//kebab-case — составные части переменной разделяются дефисом. Например: my-super-var .

// let myVariable = 55;
// myVariable = 'Paul';
// myVariable = 'Oleg';
// myVariable = true;

// console.log(myVariable);

// const myVariable = 55;
// myVariable = 'Paul';

// console.log(myVariable);

// \ - экранирование 

// let test1 = `Boy's toy`;
// let test2 = 'Boy\'s toy';
// let test3 = "Boy's toy";

// alert, prompt, confirm

// alert('Моё первое сообщение');

// prompt('Сколько Вам лет?', '123');

// confirm('Вам точно исполнилось 18?');

// const userAge = prompt("Сколько Вам лет?"); 
// console.log(userAge);

// const isOk = confirm("Вам больше 18 лет?"); 
// console.log(isOk);

// const isOk = alert("Штормит за окном"); 
// console.log(isOk);

// typeof
// typeof null => oblect

// const str = 'JavaScript';
// const year = 2024;
// const isLoading = false;
// const test = null;

// console.log(typeof str);
// console.log(typeof year);
// console.log(typeof isLoading);
// console.log(typeof test);

// var

// console.log(age);
// var age = 30;

// let age1 = 50;


// var age3 = 30;

// console.log(age4);
// let age4 = 50;


// var age5 = 30;

// let age6 = 50;
// console.log(age6);


// Задачка 1
// const startMessage = 'Запускаем таймер';
// console.log(startMessage)

// alert("5");
// alert("4");
// alert("3");
// alert("2");
// alert("1");
// alert("0");

// const endMessage = 'Обратный отсчёт закончен'
// console.log(endMessage);

// Задачка 2

// const myName = 'Spider';
// const mySuperName = 'Man';
// const myFavoriteDrink = 'Tea';
// const myFavoriteAnimal = 'Cat';

// console.log(myName);
// console.log(mySuperName);
// console.log(myFavoriteDrink);
// console.log(myFavoriteAnimal);

// LESSON 2

// // const carName = 'Audi' = ;

// // let maxCarSpeed = '329 km/h';

// // let carOwner = 'Pavel';

// // alert(carName = 'Audi');

// // alert(maxCarSpeed = '329 km/h');

// // alert(carOwner = 'Pavel');

// // операторы

// // = - присвоить
// // + 
// // - 
// // *
// // / 
// // ** - возведение в степень
// // % - остаток от деления (модуль)
// // ++ - инкремент => увеличить на 1
// // ++2
// // 2++
// // -- - декремент = уменьшить на 1
// // --2
// // 2--

// let a = 10;
// let b = 4;

// const res_1 = a + b;
// const res_2 = a - b;
// const res_3 = a * b;
// const res_4 = a ** b;
// const res_5 = a / b;
// const res_6 = a % b;

// console.log('+:', res_1);
// console.log('-:', res_2);
// console.log('*:', res_3);
// console.log('**:', res_4);
// console.log('/:', res_5);
// console.log('%:', res_6);

// const c = 5;
// делить можно
// console.log(c / 0);
// Nan => not a number
// console.log(dklugj / 0);
// console.log(0 / 0);

// - конкатенация строк
// console.log('Hello' + 'World');
// console.log('Hello' + 2); // - если один из операндов строка - получим строку

// // - операторы присваивания

// let x = 4;

// x += 2; // x = x  +2;
// x -= 2; // x = x  -2;
// x *= 2; // x = x  *2;
// x /= 2; // x = x / 2;
// x **= 2; // x = x ** 2;
// x %= 2; // x = x % 2;

// console.log(x)

// операторы сравнения => Boolean => true или false
// == - 
// === - равное и значение и тип

// console.log('==:', '2' == 2);
// console.log('===:', '2' === 2);

// !=
// !== - не равное значение или ге равный тип

// console.log('!=:', 2 != 2);
// console.log('!==:', 2 !== 2);

// >
// <
// >=
// <==
// ?

// console.log(4 > 6);
// console.log(4 < 6);
// console.log(4 >= 4);
// console.log(4 <= 2);

// console.log('3' > '25');
// console.log('31' > '25');
// console.log('312' > '251');

// console.log('H' === 'h');

// равны друг другу и не равны ничему другому
// console.log(null == undefined);
// console.log(null === undefined);

// логические операторы

// и - &&

// console.log(4 > 5 && 4 < 6);
// console.log((4 + 5 <10) && 4 < 6);

// или - ||

// console.log(4 > 5 || 4 < 6);
// console.log(4 > 5 || 4 < 3);

// не - !

// console.log(!true);
// console.log(!false);

// Преобразование типов

// Явно
// Number() => преобразование к числу
// String() => перобразование к строке
// Boolean() => преобразование к true/false
// +, *, /

// const a = 2;
// const b = '4';

// console.log(a * b);
// console.log(b / a);
// console.log(b + a);
// console.log(+b + a);
// console.log(Number(b) + a);
// console.log('Hello');

// console.log(typeof Number(b));
// console.log(typeof String(a));
// console.log(Boolean(a));
// console.log(typeof Boolean(a));

// console.log(Number('Hello')); // => Nan

// const userAge = prompt('Введите Вам возраст');
// console.log(typeof userAge);

// Boolean === !!
// console.log(!!userAge);

// 6 falsy значений => false
// false, 0, '', null, underfinded, NaN
// console.log(!!false);
// console.log(!!0); // - любое другое число, ужу true
// console.log(!!''); // - ставишь пробел, уже true
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);

// let test = 'value';
// let test2 = '2';

// console.log(+test);
// console.log(test * 2);
// console.log(test / 2);
// console.log(test - 2);
// console.log(2 - test);

// console.log(typeof +test); // => typeof NaN => number

// // isNan - проверка на NaN => true/false
// console.log(isNaN(+test));
// console.log(isNaN(+test2));

// Шаблонные строки - `` - бэктики
// можно писать многострочный текст
// можно писать другие ковычки без экранирования
// можно внедрять значения или писать выражения


// const greeting = 'Hello';
// const firstName = 'John';
// Hello, John
// const message = greeting + ',' + ' ' + firstName + '!';

// интерполяция - ${}
// const message = `${greeting}, ${firstName} !`;
// console.log(message);

// const firstName = prompt('Сколько Вам лет?');
// const age = prompt('Укажите Ваш возраст');

// const message = `Добро пожаловать ${firstName}, Вам ${age} лет`;
// console.log(message);

// инкремент, декремент

// let i = 0;

// console.log(i++);
// console.log(i++);

// console.log(i);

// console.log(++i);
// console.log(++i);

// console.log(i);

// console.log(i--);
// console.log(i--);

// console.log(i);

// console.log(--i);
// console.log(--i);

// console.log(i);

// условные операторы

// if

// if (5 > 10) {
//     let a = 4;
//     console.log(a)
// }

// if (5 < 10) {
//     let a = 4;
//     console.log(a)
// } else {
//     console.log('else block');
// }

// if (5 > 10) {
//     let a = 4;
//     console.log(a)
// } else {
//     console.log('else block');
// }

// let test = 1;

// if (test === 1 || test === 2 || test === 3) {
//     console.log('1 или 2 или 3')
// } else 
// if (test === 2) {
//     console.log('2')
// } else if (test === 3) {
//     console.log('3')
// } else 
// {
//     console.log('не 1 не 2 не 3');
// }

// switch

// break => оканчивает проверку switch
// default => если число не совпало, запуск данной строки

// const str = prompt('Введите слово');

// switch (str) {
//     case 'циплёнок':
//         console.log('Правильно - цыплёнок');
//         break;

//     case 'циц':
//         console.log('Правильно - цыц');
//         break;

//     case 'циган':
//         console.log('Правильно - циган');
//         break;

//     default:
//         console.log('Молодец, ты написал правильно!');
//     break;
// }

// if (5 > 10) {
//     console.log('5 больше 10');
// } else {
//     console.log('5 меньше 10')
// }
// тернарный оператор - короткая запись if else

// 'условие' ? 'в_случае true' : 'в случае false'

// 5 > 10 ? console.log('5 больше 10') : console.log('5 меньше 10');

// Задача 1
// const age1 = +prompt('Возраст 1');

// const age2 = +prompt('Возраст 2');

//     if (isNaN(age1) || isNaN(age2)
//     || age1 ==='' || age2 ==='' 
//     || age1 === null || age2 === null
// ) {
//         console.log('Ошибка');
//     } else if(age1 > age2){
//         console.log (`Старшему: ${age1} лет`);
//     } else if(age2 > age1){
//         console.log (`Старшему: ${age2} лет`);
//     } else {
//         console.log('Возраст равен')
//     }


// Задача 2

// const age = +prompt('Введите Ваш возраст')
//     if (age >= 0 && age <=10) {
//         console.log('Привет мальчик');
//     } else if (age >= 11 && age <= 18){
//         console.log('Привет подросток');
//     } else if (age >= 19 && age <= 40){
//         console.log('Здарова пацан');
//     } else if (age >= 41 && age <= 80){
//         console.log('Добрый вечер');
//     } else if (age >= 81 && age <= 100){
//         console.log('Здравия желаю');
//     } else {
//         console.log('Столько не живут');
//     } 

// Задача 3

// const number1 = +prompt('Введите первое число')
// const number2 = +prompt('Введите второе число')
// const number3 = +prompt('Введите третье число')

// if (isNaN(number1) || isNaN(number2) || isNaN(number3)){
//     console.log('ошибка');
// } else {
//     console.log((number1 + number2 + number3) / 3);
// }

// console.log((number1 + number2 + number3) / 3);

// Задача 4

// const color = prompt('Введите цвет');

// switch (color) {
//     case 'red':
//         console.log('1');
//         break;

//     case 'blue':
//         console.log('2');
//         break;

//     case 'orange':
//         console.log('3');
//         break;

//     case 'gray ':
//         console.log('4');
//         break;

//     case 'salmon ':
//         console.log('5');
//         break;
//     default:
//         console.log('Данный цвет не обрабатывается!');
//     break;
// }

// Задача 5

// const month = prompt('Укажите номер месяца');

// switch (month) {
//     case '1':
//         console.log('Январь');
//         break;
        
//     case '2':
//         console.log('Февраль');
//         break;
//     case '3':
//         console.log('Март');
//         break;
//     case '4':
//         console.log('Апрель');
//         break;
//     case '5':
//         console.log('Май');
//         break;
//     case '6':
//         console.log('Июнь');
//         break;
//     case '7':
//         console.log('Июль');
//         break;
//     case '8':
//         console.log('Август');
//         break;
//     case '9':
//         console.log('Сентябрь');
//         break;
//     case '10':
//         console.log('Октябрь');
//         break;
//     case '11':
//         console.log('Ноябрь');
//         break;
//     case '12':
//         console.log('Декабрь');
//         break;

//         default:
//             console.log('В году 12 месяцев');
// }
        
// Задача 6

// const Fedot = prompt('Возраст 1');

// const Mityai = prompt('Возраст 2');

//     if (isNaN(Fedot) || isNaN(Mityai)
//     // Boolean(Fedot) || Boolean(Mityai);
//     || Fedot ==='' || Mityai ==='' 
//     || Fedot === null || Mityai === null
// ) {
//         console.log('Ошибка');
//     } else if(+Fedot > +Mityai){
//         console.log (`Старшему: ${Fedot - Mityai} лет`);
//     } else if(+age2 > +Fedot){
//         console.log (`Старшему: ${Mityai - Fedot} лет`);
//     } else {
//         console.log('Возраст равен')
//     }

// Задача 1

// const age1 = prompt('Возраст 1');

// const age2 = prompt('Возраст 2');

//     if (isNaN(age1) || isNaN(age2)
//     || age1 ==='' || age2 ==='' 
//     || age1 === null || age2 === null
// ) {
//         console.log('Ошибка');
//     } else if(+age1 > +age2){
//         console.log (`Старшему: ${age1} лет`);
//     } else if(+age2 > +age1){
//         console.log (`Старшему: ${age2} лет`);
//     } else {
//         console.log('Возраст равен')
//     }

// Задача 8

// const planet = prompt('Введите планету');

// switch (planet) {
//     case 'Земля':
//         console.log('Привет, землянин!');
//         break;

//         case 'земля':
//         console.log('Привет, землянин!');
//         break;

//     default:
//         console.log('Привет, инопланетянин!');
//         break;
// }

// или 

// const planet = prompt('Введите планету');

// planet === 'Земля' || planet === 'земля' ? console.log('Привет, землянин') : console.log('Привет, инопланетянин');

// Задача 7 

// const num = +prompt('Введите число');

// if(num > 0 ) {
//     console.log('Число положительное');
// } else if(num < 0){
//     console.log('Число отритцательное');
// } else {
//     console.log('Число равно нулю');
// }



