var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        var _this = this;
        this.findDepth = function (root) {
            if (root == null) {
                return 0;
            }
            var left = _this.findDepth(root.left);
            var right = _this.findDepth(root.right);
            return Math.max(left, right) + 1;
        };
        this.diamterOfbinaryTree = function (root) {
            var diameter = 0;
            if (root == null) {
                return 1;
            }
            diameter = _this.findDepth(root.left) + _this.findDepth(root.right);
            var leftdiameter = _this.diamterOfbinaryTree(root.left);
            var rightdiameter = _this.diamterOfbinaryTree(root.right);
            console.log(leftdiameter);
            console.log(rightdiameter);
            return Math.max(diameter, Math.max(leftdiameter, rightdiameter));
        };
        this.root = null;
    }
    BST.prototype.insert = function (data, root) {
        if (root == null) {
            root = new TreeNode(data);
            return root;
        }
        else if (data < root.val) {
            root.left = this.insert(data, root.left);
        }
        else {
            root.right = this.insert(data, root.right);
        }
        return root;
    };
    BST.prototype.Search = function (data, root) {
        if (data == root.val) {
            return true;
        }
        if (data != root.val) {
            return false;
        }
        else if (data < root.val) {
            return this.Search(data, root.left);
        }
        return this.Search(data, root.right);
    };
    BST.prototype.searchIteratively = function (data) {
        return this.Search(data, this.root);
    };
    BST.prototype.prepend = function (data) {
        this.root = this.insert(data, this.root);
    };
    BST.prototype.print = function (root) {
        if (root != null) {
            this.print(root.left);
            console.log(root.val);
            this.print(root.right);
        }
    };
    BST.prototype.inOrderTraversal = function () {
        this.print(this.root);
    };
    BST.prototype.findMax = function (root) {
        var max = root.val;
        while (root.right != null) {
            max = root.right.val;
            root = root.right;
        }
        return max;
    };
    BST.prototype.findMaxRecursively = function (root) {
        if (root.right == null) {
            return root.val;
        }
        return this.findMaxRecursively(root.right);
    };
    BST.prototype.findMinRecursively = function (root) {
        if (root.left == null) {
            return root.val;
        }
        return this.findMaxRecursively(root.left);
    };
    BST.prototype.maxRecursively = function () {
        return this.findMaxRecursively(this.root);
    };
    BST.prototype.minRecursively = function () {
        return this.findMinRecursively(this.root);
    };
    BST.prototype.findMin = function (root) {
        var min = root.val;
        while (root.left != null) {
            min = root.left.val;
            root = root.left;
        }
        return min;
    };
    BST.prototype.max = function () {
        return this.findMax(this.root);
    };
    BST.prototype.min = function () {
        return this.findMin(this.root);
    };
    BST.prototype.removeLeaveNode = function (data, root) {
        if (root == null) {
            return null;
        }
        if (root.left == null && root.right == null && data == root.val) {
            return null;
        }
        else if (data < root.val) {
            root.left = this.removeLeaveNode(data, root.left);
        }
        else {
            root.right = this.removeLeaveNode(data, root.right);
        }
        return root;
    };
    BST.prototype.deleteLeaveNode = function (data) {
        return this.removeLeaveNode(data, this.root);
    };
    BST.prototype.deleteChildNode = function (data, root) {
        if (root.left == null) {
            return root.right;
        }
        if (root.right == null) {
            return root.left;
        }
        else if (data < root.val) {
            root.left = this.deleteChildNode(data, root.left);
        }
        else {
            root.right = this.deleteChildNode(data, root.right);
        }
        return root;
    };
    BST.prototype.removeChildNode = function (data) {
        return this.deleteChildNode(data, this.root);
    };
    BST.prototype.removeNonLeaveNode = function (data, root) {
        if (root === null) {
            return null;
        }
        if (data < root.val) {
            root.left = this.removeNonLeaveNode(data, root.left);
        }
        else if (data > root.val) {
            root.right = this.removeNonLeaveNode(data, root.right);
        }
        else {
            if (root.left === null) {
                return root.right;
            }
            else if (root.right == null) {
                return root.left;
            }
            var successor = this.findMin(root.right);
            root.val = successor;
            root.right = this.removeNonLeaveNode(successor, root.right);
        }
        return root;
    };
    BST.prototype.deleteNonLeafNode = function (data) {
        return this.removeNonLeaveNode(data, this.root);
    };
    BST.prototype.diameter = function () {
        return this.diamterOfbinaryTree(this.root);
    };
    return BST;
}());
var obj = new BST();
obj.prepend(5);
obj.prepend(3);
obj.prepend(8);
obj.prepend(2);
obj.prepend(4);
obj.prepend(7);
obj.prepend(9);
obj.inOrderTraversal();
obj.deleteNonLeafNode(8);
console.log("Delete Node that has two child");
obj.diameter();
//obj.removeChildNode(15)
//console.log(obj.max())
// console.log(obj.maxRecursively())
// console.log(obj.minRecursively())
// console.log(obj.searchIteratively(20))
//obj.deleteLeaveNode(15)
//console.log(obj.min())
//obj.inOrderTraversal()
