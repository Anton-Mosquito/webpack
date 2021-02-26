interface FlatNode {
    id : number;
    parentId?: number;
    name : string;
    level : number;
}

const flatNodeList2: Array<FlatNode> = [
    {
        id: 55,
        level :1,
        name: 'Programing',
    },
    {
        id: 1,
        parentId: 55,
        name: 'Git lesson',
        level : 2
    },
    {
        id: 3,
        parentId: 1,
        name: 'Git install',
        level : 3
    },
    {
        id: 5,
        parentId: 1,
        name: 'GitHub',
        level : 3
    },
    {
        id: 6,
        parentId: 1,
        name: 'GitHub',
        level : 3
    },
    {
        id: 7,
        parentId: 55,
        name: 'Angular NgRx',
        level : 2
    },
    {
        id: 8,
        parentId: 7,
        name: 'Angular NgRx store',
        level : 3
    },
    {
        id: 9,
        parentId: 7,
        name: 'Angular NgRx router',
        level : 3
    },
    {
        id: 10,
        parentId: 7,
        name: 'Angular NgRx actions',
        level : 3
    },
    {
        id: 404,
        name: 'Life',
        level : 1
    },
    {
        id: 500,
        parentId: 404,
        name: 'When need entrust task another developer',
        level : 2
    },
]

interface TreeNode {
    id : number;
    parentId?: number;
    name : string;
    level : number;
    children?: Array<TreeNode>;
    parent? : TreeNode;
}

interface TreeCustomNode extends TreeNode {
    link: string;
    image: string;
    children?: Array<TreeCustomNode>;
    parent? : TreeCustomNode;
}


class TreeCollection<T extends {
    id : number;
    parentId?: number;
    level : number;
    children?: Array<T>;
    parent? : T;
}> {
    private map: {[key: number]: T} = {};
    private collection: Array<T> = [];

    add(treeNode: T): TreeCollection<T> {
        this.map[treeNode.id] = treeNode;
        if (treeNode.level === 1) {
            this.collection.push(treeNode);
            return this;
        }

        if (treeNode.parentId && this.map[treeNode.parentId]){
            this.map[treeNode.parentId].children?.push(treeNode)
        }
        return this;
    }

    getMap(): {[key: number]: T} {
        return this.map;
    }

    remove(id: number) {
        const treeNode = this.map[id];
        if (treeNode === undefined) return;
        if (treeNode.level === 1) {
            this.collection = this.collection.filter((node)=> node.id !== id);
            return;
        }
        if(!treeNode.parentId) return;
        const parentNode = this.map[treeNode.parentId];
        parentNode.children = parentNode.children?.filter((node)=> node.id !== id);
    }

    getAll(): Array<T>{
        return this.collection;
    }
}

const treeCollection = flatNodeList2.map<TreeNode>(
    (flatNode)=> ({
    ...flatNode,
    children: []
}))
.sort(
    (a: TreeNode, b: TreeNode ) => a.level > b.level ? 1 : -1)
.reduce<TreeCollection<TreeNode>>((
    treeCollection: TreeCollection<TreeNode>,
    item: TreeNode
    ) => treeCollection.add(item), new TreeCollection<TreeNode>())

treeCollection.remove(55);

const foo = new TreeCollection<TreeCustomNode>()

console.log(treeCollection.getAll());