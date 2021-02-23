interface FlatNode1 {
    id : number;
    name : string;
    level : number;
}

const flatNodeList1: Array<FlatNode1> = [
    {
        id: 55,
        level :1,
        name: 'Programing',
    },
    {
        id: 1,
        name: 'Git lesson',
        level : 2
    },
    {
        id: 3,
        name: 'Git install',
        level : 2
    },
    {
        id: 5,
        name: 'GitHub',
        level : 3
    },
    {
        id: 7,
        name: 'Angular NgRx',
        level : 2
    },
    {
        id: 8,
        name: 'Angular NgRx store',
        level : 3
    },
    {
        id: 9,
        name: 'Angular NgRx router',
        level : 3
    },
    {
        id: 10,
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
        name: 'When need entrust task another developer',
        level : 2
    },
]

interface TreeNode1 {
    id : number;
    name : string;
    level : number;
    children: Array<TreeNode1>;
    parent? : TreeNode1;
}

const ROOT_LEVEL = 0;

const treeNodeList1: Array<TreeNode1> = flatNodeList1.map<TreeNode1>(flatNode => ({
    ...flatNode,
    children: []
})).reduce((
    acc: {[key: number]: TreeNode1},
    treeNode: TreeNode1
    ) => {
        acc[treeNode.level] = treeNode;
        const parent = acc[treeNode.level - 1];
        if (parent.level !== ROOT_LEVEL ) treeNode.parent = parent;
        parent.children.push(treeNode);
        return acc;
    }, {
        [ROOT_LEVEL]: {
            id: 0,
            name : 'root',
            level: ROOT_LEVEL,
            children : []
        }
    })[ROOT_LEVEL].children;

console.log(treeNodeList1);
