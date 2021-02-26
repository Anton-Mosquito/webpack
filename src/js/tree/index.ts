interface FlatNode {
    id : number;
    name : string;
    level : number;
}

const flatNodeList: Array<FlatNode> = [
    {
        id: 1,
        name: 'Git lesson',
        level :1
    },
    {
        id: 3,
        name: 'Git install',
        level : 2
    },
    {
        id: 5,
        name: 'Git first commit',
        level : 2
    },
    {
        id: 6,
        name: 'GitHub',
        level : 2
    },
    {
        id: 7,
        name: 'Angular NgRx',
        level : 1
    },
    {
        id: 8,
        name: 'Angular NgRx store',
        level : 2
    },
    {
        id: 9,
        name: 'Angular NgRx router',
        level : 2
    },
    {
        id: 10,
        name: 'Angular NgRx actions',
        level : 2
    },
]

interface TreeNode {
    id : number;
    name : string;
    level : number;
    parent? : TreeNode;
    children?: Array<TreeNode> 
}

const treeNodeList: Array<TreeNode>= flatNodeList.map((flatNode: FlatNode): TreeNode =>({
    ...flatNode,
    children: []
})).reduce((acc: Array<TreeNode>, treeNode: TreeNode): Array<TreeNode> => {
    if (treeNode.level === 1){
        acc.push(treeNode)
    } 
    if (treeNode.level === 2) {
        const parent = acc[acc.length - 1];
        treeNode.parent = parent;
        parent.children && parent.children.push(treeNode)
    }
    return acc;
}, []);

console.log(treeNodeList);
