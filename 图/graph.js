/**
 * [Vertex 顶点和边]
 * @param {[Number]} label      [顶点]
 * @param {[type]} wasVisited [边]
 */
function Vertex(label, wasVisited) {
    this.label = label;
    this.wasVisited = wasVisited;
}

/**
 * [Graph 图]
 * @param {[Number]} v [节点数]
 */
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(var i = 0; i < this.vertices; i++) {
    //为数组中的每个数组添加一个子数组来存储所有的相邻节点，并将所有元素初始化为空字符串
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}

/**
 * [addEdge 添加节点]
 * @param {[Number]} v [节点A]
 * @param {[Number]} w [节点B]
 */
function addEdge(v, w) { //传入两个顶点A B
    this.adj[v].push(w); //查找v的邻接表，将w添加到邻接表中
    this.adj[w].push(v); //查找w的邻接表，将v添加到邻接表中
    this.edges++; // 边数 +1
}

/**
 * [showGraph 展示图]
 * @return {[String]} [一个邻接表]
 */
function showGraph() {
    for(var i = 0; i < this.vertices; i++) {
        var z = '';
        z = i + ' ->';
        for(var j = 0; j < this.vertices; j++) {
            if(this.adj[i][j] !== undefined) {
                z += this.adj[i][j] + ' ';
            }
        }
        console.log(z);
    }
}