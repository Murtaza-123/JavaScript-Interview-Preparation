class MyQueue
{
    queue;
    constructor()
    {
        this.queue = []
    }
    push(x:number):void{
        this.queue.push(x)
    }
    pop():number
    {
        return this.queue.shift()
    }
    size():number
    {
        return this.queue.length
    }
    isEmpty():boolean{
        return this.queue.length == 0
    }
}
class MyStack
{
    public top
    public q1
    public q2
    constructor()
    {
        this.top = 0
        this.q1 = new MyQueue()
        this.q2 = new MyQueue()
    }
    push(x:number):void{
        this.q1.push(x)
        this.top = x
    }

    pop()
    {
        while(this.q1.size() > 1)
        {
            this.top = this.q1.pop()
            this.q2.push(this.top)
        }
        let remove = this.q1.pop()
        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
        return remove
    }

    peek()
    {
         return this.top
    }
    empty()
    {
        return this.q1.isEmpty()
    }
}