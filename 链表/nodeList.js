/**
 * [Node 节点类]
 * @param {[String]} element [节点值]
 */
function Node(element) {
    this.element = element;
    this.next = null;
}

/**
 * [LList 链表的构造函数]
 */
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

/**
 * [find 查找链表上的元素]
 * @param  {[String]} item [要被查找的元素]
 * @return {[String]}      [当前元素]
 */
function find(item) {
    var currNode = this.head;
    console.log(currNode.element);
    while(currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

/**
 * [insert 插入一个节点]
 * @param  {[String]} newElement [新插入节点]
 * @param  {[String]} item       [节点的值]
 */
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

/**
 * [findPrevious 查找前一个节点]
 * @param  {[String]} item [节点的值]
 * @return {[String]}      [节点]
 */
function findPrevious(item) {
    var currNode = this.head;
    while(currNode.next !== null && currNode.next.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

/**
 * [remove 删除节点]
 * @param  {[String]} item [节点的值]
 */
function remove(item) {
    var prevNode = findPrevious(item);
    if(prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
    }
}

/**
 * [display 打印链表]
 * @return {[String]} [链表值]
 */
function display() {
    var currNode = this.head;
    while(currNode.next !== null) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}