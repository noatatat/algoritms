let treeSum = 0;

function getTreeSum(tree: TreeNode) {
  treeSum += tree.valueNode;
  tree.next?.forEach(subTree => getTreeSum(subTree));

  return treeSum;
}

function getTreeSumNonRecursive(obj: TreeNode) {
  let arr = [ obj ], sum = 0, current;

  while (arr.length > 0) {
    current = arr.shift();
    sum += current.valueNode;
    arr.push(...(current.next ?? []));
  }
  return sum;
}

interface TreeNode {
  valueNode: number;
  next: TreeNode[];
}

let tree: TreeNode = {
  valueNode: 3,
  next: [
    {
      valueNode: 1,
      next: null
    },
    {
      valueNode: 3,
      next: null
    },
    {
      valueNode: 2,
      next: null
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null
        },
        {
          valueNode: 5,
          next: null
        }
      ]
    }
  ]
};

console.log(getTreeSum(tree));
console.log(getTreeSumNonRecursive(tree));
