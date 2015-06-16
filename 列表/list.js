/**
 * [初始化列表构造函数]
 */
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];//初始化一个空数组俩存放列表元素
}
/**
 * [append 在列表末尾加入新元素]
 * @param  {[String]} element [添加的内容]
 */
List.prototype.append = function(element) {
    this.dataStore[this.listSize++] = element;
};
/**
 * [find 查找元素所在位置]
 * @param  {[String]} element [查找的元素]
 * @return {[Number]}         [元素下标]
 */
List.prototype.find = function(element) {
    for(var i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
};
/**
 * [remove 移除指定元素]
 * @param  {[String]} element [想要移除的元素]
 */
List.prototype.remove = function(element) {
    var ePlace = this.find(element);
    if(ePlace > -1) {
        this.dataStore.splice(ePlace, 1);
        --this.listSize;
    }
    return false;
};
/**
 * [length 列表长度]
 * @return {[Number]} [数组的长度]
 */
List.prototype.length = function() {
    return this.listSize;
};
/**
 * [toString 获取列表的字符串形式]
 * @return {[String]} [列表的字符串形式]
 */
List.prototype.toString = function() {
    var a = this.dataStore.join(',');
    return a;
};
/**
 * [insert 在某元素之后插入元素]
 * @param  {[String]} element [插入的元素]
 * @param  {[String]} ins     [插入在它之后]
 * @return {[Boolean]}        [description]
 */
List.prototype.insert = function(element, ins) {
    var inser = this.find(ins);
    if(inser > -1) {
        this.dataStore.splice(inser + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
};
/**
 * [clear 清空列表]
 */
List.prototype.clear = function() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
};
/**
 * [contains 查找元素是否存在于列表中]
 * @param  {[String]} element [查找的元素]
 * @return {[Boolean]}         [是/否存在]
 */
List.prototype.contains = function(element) {
    for(var i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
};
/**
 * [front 将列表的当前位置移动到第一个元素]
 */
List.prototype.front = function() {
    this.pos = 0;
};
/**
 * [end 将列表当前位置移动到最后一个元素]
 */
List.prototype.end = function() {
    this.pos = this.dataStore.length - 1;
};
/**
 * [prev 当前位置前移]
 */
List.prototype.prev = function() {
    if(this.pos > 0) {
        --this.pos;
    }
};
/**
 * [next 当前位置后移]
 */
List.prototype.next = function() {
    if(this.pos < this.listSize - 1) {
        ++this.pos;
    }
};
/**
 * [currPos 返回列表当前位置]
 * @return {[Number]} [列表当前位置]
 */
List.prototype.currPos = function() {
    return this.pos;
};
/**
 * [moveTo 移动当前位置到指定位置]
 * @param  {[Number]} postion [指定位置]
 * @return {[Number]}         [当前位置]
 */
List.prototype.moveTo = function(postion) {
    this.pos = postion;
};
/**
 * [getElement 获取当前位置元素]
 * @return {[String]} [当前位置元素]
 */
List.prototype.getElement = function() {
    return this.dataStore[this.pos];
};