class MyNode {
    data: number;
    next: MyNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

function mergeTwoLists(list1: MyNode | null, list2: MyNode | null): MyNode | null {
    const dummyHead = new MyNode(-1);
    let current = dummyHead;

    while (list1 && list2) {
        if (list1.data < list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return dummyHead.next;
}

const node1 = new MyNode(1);
const node2 = new MyNode(2);
const node3 = new MyNode(4);
node1.next = node2;
node2.next = node3;

const node4 = new MyNode(1);
const node5 = new MyNode(3);
const node6 = new MyNode(4);
node4.next = node5;
node5.next = node6;
const mergedList = mergeTwoLists(node1, node4);
console.log(mergedList);
