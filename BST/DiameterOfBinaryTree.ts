class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val: number) {
        this.val = val
        this.left , this.right = null
    }
}
let findDepth = (root:TreeNode)=>
{
    if(root == null)
    {
        return 0;
    }
    let left = findDepth(root.left)
    let right = findDepth(root.right)
    return Math.max(left , right)+1

}

let diamterOfbinaryTree = (root:TreeNode)=>
{
    let diameter = 0
    if(root == null)
    {
        return 0
    }
   diameter =  findDepth(root.left) + findDepth(root.right)
    let leftdiameter = diamterOfbinaryTree(root.left)
    let rightdiameter = diamterOfbinaryTree(root.right)
    console.log(leftdiameter)
    console.log(rightdiameter)
    return Math.max(diameter , Math.max(leftdiameter , rightdiameter))
}


