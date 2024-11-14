// --------------function declaration -------------

function имя(параметры) {
//    ...тело...
}

function showMessage() {
    alert( 'Всем привет!' );
}

showMessage();
showMessage();



// Локальные переменные
// Переменные, объявленные внутри функции, видны только внутри этой функции. Например:

function showMessage() {
    let message = "Привет, я JavaScript!"; // локальная переменная  
    alert( message );
}
  
showMessage(); // Привет, я JavaScript!  
alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции


//Внешние переменные (глобальные)
// У функции есть доступ к внешним переменным, например:

let userName = 'Вася';

function showMessage() {
  let message = 'Привет, ' + userName2;
  alert(message);
}

showMessage(); // Привет, Вася


// Функция обладает полным доступом к внешним переменным и может изменять их значение. Например:

let userName2 = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName2;
  alert(message);
}

alert( userName ); // Вася перед вызовом функции

showMessage();

alert( userName ); // Петя, значение внешней переменной было изменено функцией


//Внешняя переменная используется, только если внутри функции нет такой локальной. Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю. Например, в коде ниже функция использует локальную переменную userName. Внешняя будет проигнорирована:

let userName = 'Вася';

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = 'Привет, ' + userName; // Петя
  alert(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();

alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную

// !!!! Глобальные переменные видимы для любой функции (если только их не перекрывают одноимённые локальные переменные).



//Параметры

function showMessage(from, text) { // параметры: from, text
    alert(from + ': ' + text);
  }
  
showMessage('Аня', 'Привет!'); // Аня: Привет!  Когда функция вызывается, переданные значения копируются в локальные переменные from и text. Затем они используются в теле функции.


// Возврат значения return

function sum(a, b) {
  let c = a + b;
  console.log(c);       
}
console.log(sum(2, 3)); // функция вернула sum underfined



function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));  // функция вернула sum 5


// Вызовов return может быть несколько, например:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('А родители разрешили?');
  }
}

let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}

//Возможно использовать return и без значения. Это приведёт к немедленному выходу из функции.

function checkAge(age) {
  if ( age < 18 ) {
    return
  }
  alert( "Вам показывается кино" )   // Результат функции с пустым return или без него – undefined
}

//Пустой return аналогичен return undefined:

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true

//Никогда не добавляйте перевод строки между return и его значением
// return
//  (some + long + expression + or + whatever * f(a) + f(b))
// return;
//  (some + long + expression + or + whatever * f(a) + f(b))

//  return (
//   some + long + expression
//   + or +
//   whatever * f(a) + f(b)
//   )


//Функции должны быть короткими и делать только что-то одно. Если это что-то большое, имеет смысл разбить функцию на несколько меньших


// ----------Function Expression--------------
let sum = function(a, b) {
  return a + b;
};

//Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.
//Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части «выражения присваивания» =:

//Более тонкое отличие состоит в том, когда создаётся функция движком JavaScript. Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// Function Declaration может быть вызвана раньше, чем она объявлена.

sayHi("Вася"); // Привет, Вася
function sayHi(name) {
  alert( `Привет, ${name}` );
}


sayHi("Вася"); // ошибка!
let sayHi = function(name) {  // (*) магии больше нет
  alert( `Привет, ${name}` );
};


// ----------------- Стрелочные функции -------------

let sum = (a, b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

//Если у нас только один аргумент, то круглые скобки вокруг параметров можно опустить, сделав запись ещё короче:
let double = n => n * 2;

// Если аргументов нет, круглые скобки будут пустыми, но они должны присутствовать:

let sayHi = () => alert("Hello!");