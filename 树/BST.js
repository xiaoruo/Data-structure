/**
 * [Node 定义节点]
 * @param  {[Array]} data  [节点]
 * @param  {[NUmber]} left  [左孩子]
 * @param  {[NUmber]} right [右孩子]
 * @return {[NUmber]}       [节点]
 */
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function() {
        return this.data;
    }
}

function BST() {
    this.root = null; //根节点
    this.insert = insert; //创建二叉查找树
    this.inOrder = inOrder; //中序遍历
    this.preOrder = preOrder; //先序遍历
    this.postOrder = postOrder; //后序遍历
    this.getMin = getMin; //查找最小值//
    this.getMax = getMax; //查找最小值
    this.find = find //查找定值
    this.remove = remove; //删除某个节点
    this.removeNode = removeNode;
}

/**
 * [insert 创建节点]
 * @param  {[Array]} data [节点数据]
 */
function insert(data) {
    var n = new Node(data, null, null); //创建一个没有左右孩子的节点n
    if(this.root === null) { //如果还没有根节点则将节点n设置为根节点
        this.root = n;
    } else { //如果已经存在根节点了的话
        var current = this.root; //当前指向根节点        var parent;
        while(true) {
            parent = current; //当前结点作为父节点
            if(data < current.data) { //如果数据小于当前结点(父节点)的值
                current = current.left; //当前结点为左孩子
                if(current === null) {//如果当前结点没有的话
                    parent.left = n; //
                    break;
                }
            } else {
                current = current.right;
                if(current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

/**
 * [inOrder 中序遍历]
 * @example 按照节点上的键值，以升序访问BST上所有的节点
 * @param  {[Number]} node [节点]
 * @return {[Number]}      [节点对应的值]
 */
function inOrder(node) {
    // debugger
    if(node !== null) {
        inOrder(node.left);
        console.log(node.show() + '');
        inOrder(node.right);
    }
}

/**
 * [preOrder 先序遍历]
 * @param  {[Number]} node [根节点]
 */
function preOrder(node) {
    if(node !== null) {
        console.log(node.show() + ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}

/**
 * [postOrder 后序遍历]
 * @param  {[Number]} node [根节点]
 */
function postOrder(node) {
    if(node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + ' ');
    }
}

function getMin() {
    var current = this.root;
    while(current !== null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while(current !== null) {
        current = current.right;
    }
    return current.data;
}

function fing(data) {
    var current = this.root;
    while(current !== null) {
        if(current.data = data) {
            return current;
        } else if(data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}

function remove(data) {
    root = removeNode(this.root, data);
}
function removeNode(node, data) {
    if(node === null) {
        if(data === node.data) {
            if(node.left === null && node.right === null) {
                return null;
            }else if(node.left === null) {
                return node.right;
            }else if(node.right === null) {
                return node.left;
            }
            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.left, data);
            return node;
        }else if(data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        }else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
}