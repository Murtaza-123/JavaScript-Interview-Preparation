class MyNode {
    val: number
    left: MyNode | null
    right: MyNode | null

    constructor(val: number) {
        this.val = val
        this.left , this.right = null
    }
}
let invertTree = (root:MyNode)=>
{
    if(root == null)
    {
        return null
    }
    let left:MyNode = root.left
    let right:MyNode = root.right
    root.left = invertTree(right)
    root.right = invertTree(left)
    return root
}