/**
 * [bubbleSort 冒泡排序]
 * @param  {[Array]} array [要排序的数组]
 * @return {[Array]}       [排好序的数组]
 */
function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
        for (var j = 0; j <= i; j++) {
            if (array[j] > array[j + 1]) {
                var a = array[j + 1];
                array[j + 1] = array[j];
                array[j] = a;
            }
        }
    }
    return array;
}

function chooseSort(array) {
    for(var i = 0; i < array.length; i++) {
        var index = i;
        for(var j = i + 1; j <= array.length; j++) {
            if(array[j] < array[index]) {
                index = j;
            }
        }
    }
}

function lala(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var a = array[j];
                array[j] = array[i];
                array[i] = a;
            }
        }
    }
    return array;
}

var z = [3, 7, 1, 4, 2, 8];
console.log(bubbleSort(z));