// // ООП
// // Object 

// // Способ создания:
// let obj1 = {}          // синтаксис "литерал объекта"
// let obj2 = new Object  // синтаксис "конструктор объекта"

// let user = {           // объект
//   name: 'Rustam',      // под ключом "name" хранится значение "Rustam"
//   'age': 16,
//   "date registarition": '01/02/2023',
//   teacher: true,
//   pensioner: null,
//   address: {
//     city: 'Ufa',
//     street: 'Octubrya'
//   },
//   sayHi: () => console.log('Привет!')
// }

// // Добавление свойств
// obj1.name = 'Ura'
// // console.log();

// // obj['age'] = 7
// // console.log();

// obj1.adress = {}
// obj1.adress.city = 'Sterlitamak'

// // Удаление свойств
// delete obj1.adress.city

// console.log(obj1.adress.city);

// // Проверка существования свойства внутри объекта

// var obj={};
// obj.Name = "Oleg";
// // проверяем есть ли свойство Age
// // in вернет false, так как этого свойства нет
// if("Age" in obj){
//  alert("Exists");
// }
// else{
//  alert("Not exists");
// }

// Просмотр всех свойств внутри объекта

var rect={
  x:0,
  y:0,
  endX:10,
  endY:10
 };
 // в tempProperty будет попадать название свойства
 // такое как x,y,endX,endY
 for(var tempProperty in rect){
  // отображаем название свойства
  alert(tempProperty);
  // значение свойства
  alert(rect[tempProperty]);
 }






// Объект - ссылочный тип данных

// let obj3 = {}
// let obj4 = {}

// console.log(typeof(obj3));
// console.log(typeof(obj4));

// console.log( obj3 == obj4);
// console.log( obj3 === obj4);


// let user = { name: 'Masha'}
// console.log(user.name);
// let userCopy = user
// userCopy.name = 'Maria'

// console.log(user.name);
