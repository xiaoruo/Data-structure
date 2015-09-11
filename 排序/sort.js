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

/**
 * [chooseSort 选择排序]
 * @param  {[Array]} array [要排序的数组]
 * @return {[Array]}       [排好序的数组]
 */
function chooseSort(array) {
    for (var i = 0; i < array.length; i++) {
        var index = i;
        for (var j = i + 1; j <= array.length; j++) {
            if (array[j] < array[index]) {
                index = j;
            }
        }
    }
}

/**
 * [insertSort 插入排序]
 * @param  {[Array]} arr [需要排序的数组]
 * @return {[Array]}     [排序完成的数组]
 */
function insertSort(arr) {
    var key;
    for (var j = 1; j < arr.length; j++) {
        var i = j - 1;
        key = arr[j];
        while (i >= 0 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = key;
    }
    return arr;
}

/**
 * [quickSort 快速排序]
 * @param  {[Array]} arr [要排序的数组]
 * @return {[Array]}     [排好序数组]
 */
function quickSort(arr) {
    if(arr.length === 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for(var i = 1; i < list.length; i++) {
        if(list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
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
console.log(insertSort(z));