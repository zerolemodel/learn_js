//Создайте объект с одним полем name и присвойте его в константу.
 const obj1 = {name: 'natalka'};

// Создайте объект с одним полем name и присвойте его в переменную.
let obj2 = {name: 'alex'};

// Попробуйте поменять поле name у обоих объектов.
obj1.name = 'pavlo';
obj2.name = 'maria';
console.log(obj1, obj2);

// Попробуйте присвоить другой объект в оба идентификатора.
//obj1 = 1; Буде помилка, бо obj1 це константа
obj2 = 2;
console.log(obj1);


// Объясните поведение кода.
//obj1 = 1; Буде помилка, бо obj1 це константа


// Реализуйте функцию createUser с сигнатурой createUser(name: string, city: string): object. Пример вызова: createUser('Marcus Aurelius', 'Roma') функция должна вернуть объект { name: 'Marcus Aurelius', city: 'Roр
function createUser(name, city){
    return {
      name: name,
      city: city,
    }
}