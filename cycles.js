//Выведите все нечетные числа из диапазона [15, 30] включая крайние числа.
for (let n = 15; n <= 30; n++) {
    if ((n % 2) !== 0) {
        console.log(n)
    }
}

// Реализуйте функцию range(start: number, end: number) которая выполняет предыдущую задачу.
function range(start, end){
    for (; start <= end; start++) {
        if ((start % 2) !== 0) {
            console.log(start)
        }
    }
}

