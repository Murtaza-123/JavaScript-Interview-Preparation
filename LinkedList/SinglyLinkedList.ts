class MyNode {
    val: number
    next: MyNode | null

    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    head: MyNode | null

    public insert(data: number) {
        let new_node = new MyNode(data);
        if (!this.head) {
            this.head = new_node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = new_node
        }
    }

    public delete(data: number) {
        if (!this.head) {
            console.log("Empty");
        }
        if (this.head.val == data) {
            this.head = this.head.next;
            return;
        }
        let prev = null;
        let current = this.head
        while (current.val != data) {
            prev = current
            current = current.next

        }
        prev.next = current.next;
    }

    public removeDuplicates() {
        let current = this.head
        if (current == null && current.next == null) {
            return current
        }
        while (current != null && current.next != null) {
            if (current.val == current.next.val) {
                current.next = current.next.next;
            } else {
                current = current.next
            }

        }
        return current
    }

    public print(): void {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.insert(1);
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(3);
//list.delete(15)
list.removeDuplicates()
list.print();