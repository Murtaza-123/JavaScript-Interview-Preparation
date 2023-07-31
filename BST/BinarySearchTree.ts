class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val: number) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    root: TreeNode | null

    constructor() {
        this.root = null
    }

    public insert(data: number, root: TreeNode) {
        if (root == null) {
            root = new TreeNode(data)
            return root
        } else if (data < root.val) {
            root.left = this.insert(data, root.left)
        } else {
            root.right = this.insert(data, root.right)
        }
        return root
    }

    public Search(data: number, root: TreeNode) {
        if (data == root.val) {
            return true
        }
        if (data != root.val) {
            return false
        } else if (data < root.val) {
            return this.Search(data, root.left)
        }
        return this.Search(data, root.right)
    }

    public searchIteratively(data: number): boolean {
        return this.Search(data, this.root)
    }

    public prepend(data: number) {
        this.root = this.insert(data, this.root)
    }

    public print(root: TreeNode | null) {
        if (root != null) {
            this.print(root.left)
            console.log(root.val)
            this.print(root.right)

        }
    }

    public inOrderTraversal() {
        this.print(this.root)
    }

    public findMax(root: TreeNode) {
        let max = root.val
        while (root.right != null) {
            max = root.right.val
            root = root.right
        }
        return max
    }

    public findMaxRecursively(root: TreeNode) {
        if (root.right == null) {
            return root.val
        }
        return this.findMaxRecursively(root.right)
    }

    public findMinRecursively(root: TreeNode) {
        if (root.left == null) {
            return root.val
        }
        return this.findMaxRecursively(root.left)
    }

    public maxRecursively() {
        return this.findMaxRecursively(this.root)
    }

    public minRecursively() {
        return this.findMinRecursively(this.root)
    }

    public findMin(root: TreeNode) {
        let min = root.val
        while (root.left != null) {
            min = root.left.val
            root = root.left
        }
        return min
    }

    public max() {
        return this.findMax(this.root)
    }

    public min() {
        return this.findMin(this.root)
    }    public removeLeaveNode(data: number, root: TreeNode) {
        if (root == null) {
            return null
        }
        if (root.left == null && root.right == null && data == root.val) {
            return null
        } else if (data < root.val) {
            root.left = this.removeLeaveNode(data, root.left)
        } else {
            root.right = this.removeLeaveNode(data, root.right)
        }
        return root
    }

    public deleteLeaveNode(data: number) {
        return this.removeLeaveNode(data, this.root)
    }

    public deleteChildNode(data: number, root: TreeNode) {
        if (root.left == null) {
            return root.right
        }
        if (root.right == null) {
            return root.left
        } else if (data < root.val) {
            root.left = this.deleteChildNode(data, root.left)
        } else {
            root.right = this.deleteChildNode(data, root.right)
        }
        return root
    }

    public removeChildNode(data: number) {
        return this.deleteChildNode(data, this.root)    }

    public removeNonLeaveNode(data: number, root:TreeNode): TreeNode | null {
        if (root === null) {
            return null;
        }
        if (data < root.val) {
            root.left = this.removeNonLeaveNode(data, root.left);
        } else if (data > root.val) {
            root.right = this.removeNonLeaveNode(data, root.right);
        } else {
            if (root.left === null) {
                return root.right;
            }
            else if (root.right == null)
            {
                return root.left
            }
                const successor = this.findMin(root.right);
                root.val = successor;
                root.right = this.removeNonLeaveNode(successor, root.right);

        }

        return root;
        }

    public deleteNonLeafNode(data: number) {
        return this.removeNonLeaveNode(data, this.root)
    }
    findDepth = (root:TreeNode)=>
    {
        if(root == null)
        {
            return 0;
        }
        let left = this.findDepth(root.left)
        let right = this.findDepth(root.right)
        return Math.max(left , right)+1

    }

     diamterOfbinaryTree = (root:TreeNode)=>
    {
        let diameter = 0
        if(root == null)
        {
            return 0
        }
        diameter =  this.findDepth(root.left) + this.findDepth(root.right)
        let leftdiameter = this.diamterOfbinaryTree(root.left)
        let rightdiameter = this.diamterOfbinaryTree(root.right)
        console.log(leftdiameter)
        console.log(rightdiameter)
        return Math.max(diameter , Math.max(leftdiameter , rightdiameter))
    }
    public diameter()
    {
      return  this.diamterOfbinaryTree(this.root)
    }

}

let obj = new BST()
obj.prepend(5)
obj.prepend(3)
obj.prepend(8)
obj.prepend(2)
obj.prepend(4)
obj.prepend(7)
obj.prepend(9)
obj.inOrderTraversal()
obj.deleteNonLeafNode(8)
console.log("Delete Node that has two child")
obj.diameter()
//obj.removeChildNode(15)
//console.log(obj.max())
// console.log(obj.maxRecursively())
// console.log(obj.minRecursively())
// console.log(obj.searchIteratively(20))
//obj.deleteLeaveNode(15)
//console.log(obj.min())
//obj.inOrderTraversal()
