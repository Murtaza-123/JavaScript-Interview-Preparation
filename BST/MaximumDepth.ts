class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val: number) {
        this.val = val
        this.left , this.right = null
    }
}
function maxDepth(root: TreeNode | null): number {
    if(root == null)
    {
        return 0;
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)

    return Math.max(left , right) + 1
}
