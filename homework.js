import readline from 'readline';

/**
 * Задание 1.2: 
 */
export function countIdentic(arr) {
    let count = 0;
    let seen = [];
    let checked = [];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (arr.indexOf(item) !== i && !checked.includes(item)) {
            count++;
            checked.push(item);
        }
    }
    return count;
}

/**
 * Задание 1.8: 
 */
export function getAverage(arr) {
    let sum = 0;
    let i = 0;
    while (arr[i] !== undefined) {
        sum += arr[i];
        i++;
    }
    return arr.length === 0 ? 0 : sum / arr.length;
}

/**
 * Задание 2.8: 
 */
export function sumUnique(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}

/**
 * Задание 3.2: 
 */
export function inverse(arr, num = 0) {
    let result = [...arr]; 
    if (num >= 0) {
        let head = result.slice(0, num);
        let tail = result.slice(num).reverse();
        return head.concat(tail);
    } else {
        let absNum = Math.abs(num);
        let tail = result.slice(result.length - absNum);
        let head = result.slice(0, result.length - absNum).reverse();
        return head.concat(tail);
    }
}


console.log("=== РЕЗУЛЬТАТЫ ДОМАШНЕГО ЗАДАНИЯ ===");
console.log("Тест со стандартными данными:");

const testData = [1, 2, 2, 3, 4, 4, 4, 5]; 
console.log("1.2 Повторяющихся элементов:", countIdentic(testData)); 

const ratings = [5, 4, 10, 8, 3];
console.log("1.8 Средний рейтинг:", getAverage(ratings));

const ids = [10, 20, 10, 30, 40, 20];
console.log("2.8 Сумма уникальных ID:", sumUnique(ids));

const tools = ["HDR", "Focus", "Dispersion", "Mirror", "Shadow"];
console.log("3.2 Инверсия (кроме первых 2):", inverse(tools, 2));
console.log("3.2 Инверсия (кроме последних 2):", inverse(tools, -2));

console.log("\n- ВВОД С КЛАВИАТУРЫ -");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите числа через пробел (например, 1 2 2 3 4): ', (input) => {
    const userArray = input.trim().split(/\s+/).map(Number);

    console.log('\n - РЕЗУЛЬТАТЫ -');
    console.log("Ваш массив:", userArray);
    console.log("1.2 Повторяющихся элементов:", countIdentic(userArray));
    console.log("1.8 Средний рейтинг:", getAverage(userArray));
    console.log("2.8 Сумма уникальных ID:", sumUnique(userArray));

    rl.close();
});