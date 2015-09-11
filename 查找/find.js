/**
 * [seqSearch 顺序查找]
 * @param  {[Array]} arr  [被查找的数组]
 * @param  {[String|Number]} data [查找的元素]
 * @return {[Number|boolen]}      [下标或false]
 */
function seqSearch(arr, data) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === data) {
            return i;
        }
    }
    return false;
}

/**
 * [binSearch 二分查找]
 * @param  {[Array]} arr  [被查找的数组]
 * @param  {[String|Number]} data [查找的元素]
 * @return {[Number|boolen]}      [下标或false]
 */
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while(lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if(arr[mid] < data) {
            lowerBound = mid + 1;
        } else if(arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return false;
}

function findmax(arr) {
    var min = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    var max = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}