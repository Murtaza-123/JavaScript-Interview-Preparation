var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.queue = [];
    }
    MyQueue.prototype.push = function (x) {
        this.queue.push(x);
    };
    MyQueue.prototype.pop = function () {
        return this.queue.shift();
    };
    MyQueue.prototype.size = function () {
        return this.queue.length;
    };
    MyQueue.prototype.isEmpty = function () {
        return this.queue.length == 0;
    };
    return MyQueue;
}());
var MyStack = /** @class */ (function () {
    function MyStack() {
        this.peek = 0;
        this.queue1 = new MyQueue();
        this.queue2 = new MyQueue();
    }
    MyStack.prototype.push = function (x) {
        this.queue1.push(x);
        this.peek = x;
    };
    MyStack.prototype.pop = function () {
        while (this.queue1.size() > 1) {
            this.peek = this.queue1.pop();
            this.queue2.push(this.peek);
        }
        var remove = this.queue1.pop();
        var temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
        return remove;
    };
    MyStack.prototype.top = function () {
        return this.peek;
    };
    MyStack.prototype.empty = function () {
        return this.queue1.isEmpty();
    };
    return MyStack;
}());
var mystack = new MyStack();
mystack.push(1);
mystack.push(2);
mystack.push(3);
mystack.pop();
mystack.pop();
mystack.pop();
mystack.empty();
//mystack.print()
