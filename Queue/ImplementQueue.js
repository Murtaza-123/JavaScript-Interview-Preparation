var MyStack = /** @class */ (function () {
    function MyStack() {
        this.top = 0;
        this.array = [];
    }
    MyStack.prototype.push = function (x) {
        this.array.push(x);
        this.top = x;
    };
    MyStack.prototype.pop = function () {
        this.top--;
        return this.array.pop();
    };
    MyStack.prototype.peek = function () {
        return this.top;
    };
    MyStack.prototype.isEmpty = function () {
        return this.array.length == 0;
    };
    return MyStack;
}());
var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.top = 0;
        this.stack1 = new MyStack();
        this.stack2 = new MyStack();
    }
    MyQueue.prototype.enQueue = function (x) {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(x);
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
    };
    MyQueue.prototype.deQueue = function () {
        return this.stack1.pop();
    };
    return MyQueue;
}());
var myqueue = new MyQueue();
myqueue.enQueue(1);
myqueue.enQueue(2);
myqueue.enQueue(3);
console.log(myqueue.deQueue());
console.log(myqueue.stack1);
