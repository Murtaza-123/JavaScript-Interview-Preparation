class MyStack
{
    array
    top
    constructor()
    {
        this.top = 0
        this.array = []
    }

    push(x:number):void{
        this.array.push(x)
        this.top = x
    }

    pop():number
    {
       this.top--
       return this.array.pop()
    }

    peek():number
    {
        return this.top
    }

    isEmpty():boolean
    {
        return this.array.length == 0
    }
}


class MyQueue
{
    public top
    public stack1
    public stack2
    constructor()
    {
        this.top = 0
        this.stack1 = new MyStack()
        this.stack2 = new MyStack()
    }

    enQueue(x:number):void
    {
        while(!this.stack1.isEmpty())
        {
            this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(x)
        while(!this.stack2.isEmpty())
        {
            this.stack1.push(this.stack2.pop())
        }
    }
    deQueue()
    {
        return this.stack1.pop()
    }
}

let myqueue = new MyQueue()
myqueue.enQueue(1)
myqueue.enQueue(2)
myqueue.enQueue(3)
console.log(myqueue.deQueue())
console.log(myqueue.stack1)