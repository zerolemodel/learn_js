//Реализуйте функцию average с сигнатурой average(a: number, b: number): number вычисляющую среднее арифметическое своих аргументов.
 function average(a, b){
   return (a + b) / 2;
 }

// Реализуйте функцию square с сигнатурой square(x: number): number вычисляющую квадрат своего аргумента.
function square(x){
    return x ** 2;
}

// Реализуйте функцию cube с сигнатурой cube(x: number): number вычисляющую куб своего аргумента.
function cube(x){
    return x ** 3;
}

// Вызовите функции square и cube в цикле, передавая результаты их исполнения в функцию average. Выведите результаты вызова average.
for (let i = 0; i <= 100; i++){
    console.log(average(square(i), cube(i)));
}