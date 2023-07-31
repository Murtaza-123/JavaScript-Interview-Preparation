var MyNode = /** @class */ (function () {
    function MyNode(data) {
        this.data = data;
        this.next = null;
    }
    return MyNode;
}());
function mergeTwoLists(list1, list2) {
    var dummyHead = new MyNode(-1);
    var current = dummyHead;
    while (list1 && list2) {
        if (list1.data < list2.data) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return dummyHead.next;
}
var node1 = new MyNode(1);
var node2 = new MyNode(2);
var node3 = new MyNode(4);
node1.next = node2;
node2.next = node3;
var node4 = new MyNode(1);
var node5 = new MyNode(3);
var node6 = new MyNode(4);
node4.next = node5;
node5.next = node6;
var mergedList = mergeTwoLists(node1, node4);
console.log(mergedList);
