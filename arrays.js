//Объявите массив объектов с двумя полями: name и phone для хранения телефонной книги. Пример: { name: 'Marcus Aurelius', phone: '+380445554433' }
const firstArray = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Natalka Aurelius', phone: '+000000000000' }
];


// Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string.
// При вызове функция должна находить объект, где поле name равно аргументу name
// и возвращать номер телефона из объекта.
function findPhoneByName(name) {
    for (let n = 0; n < firstArray.length; n++) {
        if (firstArray[n].name === name) {
            return firstArray[n].phone
        }
    }
}