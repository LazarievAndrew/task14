
// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// Найти сумму и количество положительных элементов.
// Найти минимальный элемент массива.
// Найти максимальный элемент массива.
// Определить количество отрицательных элементов.
// Найти количество нечетных положительных элементов.
// Найти количество четных положительных элементов.
// Найти сумму четных положительных элементов.
// Найти сумму нечетных положительных элементов.
// Найти определить количество элементов, равных 4.

var arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

var positiveSumm = 0;
var positiveQuantity = 0;
var arrMax = arr[0]; //для первого способа решения
var arrMin = arr[0]; //для первого способа решения
var negativeQuantity = 0;
var oddPositiveQuantity = 0;
var evenPositiveQuantity = 0;
var evenPositiveSumm = 0;
var oddPositiveSumm = 0;
var fourQuantity = 0;

for(var i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        positiveQuantity++;         //находим количество положительных чисел массива
        positiveSumm += arr[i];     //находим сумму положительных чисел массива

        if (!(arr[i] % 2) && arr[i]){
            evenPositiveQuantity++;        //находим количество положительных четных чисел массива
            evenPositiveSumm += arr[i];    //находим сумму положительных четных чисел массива
        } else if (arr[i] % 2 && arr[i]) { // если бы не надо было делать проверку на "0", то условие не нужно было бы писать
            oddPositiveQuantity++;         //находим количество положительных нечетных чисел массива
            oddPositiveSumm += arr[i];     //находим сумму положительных нечетных чисел массива
        }

    } else if (arr[i] < 0){
        negativeQuantity++;         //находим количество отрицательных чисел массива
    }

    if (arr[i] === 4){
        fourQuantity++;             //находим количество элементов массива равных "4"
    }

    // первый способ проверки на макимальное и минимальное число массива, второй выведен сразу в document.write

    if (arr[i] > arrMax){
        arrMax = arr[i];
    }

    if (arr[i] < arrMin){
        arrMin = arr[i];
    }
}

document.write
    ('Сумма положительных элементов массива равна: ' + positiveSumm + '<br />' +
    'Колличество положительных элементов массива: ' + positiveQuantity + '<br />' + 
    'Минимальный элемент массива (первый способ): ' + arrMin + '<br />' + 
    'Максимальный элемент массива (первый способ): ' + arrMax + '<br />' +
    'Минимальный элемент массива (второй способ): ' + Math.min.apply(null, arr) + '<br />' + 
    'Максимальный элемент массива (второй способ): ' + Math.max.apply(null, arr) + '<br />' +
    'Количество отрицательных элементов массива: ' + negativeQuantity + '<br />' +
    'Количество нечетных положительных элементов: ' + oddPositiveQuantity + '<br />' +
    'Количество четных положительных элементов: ' + evenPositiveQuantity + '<br />' +
    'Сумма четных положительных элементов: ' + evenPositiveSumm + '<br />' +
    'Сумма нечетных положительных элементов: ' + oddPositiveSumm + '<br />' +
    'Количество элементов, равных "4": ' + fourQuantity);