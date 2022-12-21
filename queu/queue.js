class queue{
    constructor(){
        this.que=[]
        this.max=10;
    }

    enqueue(val){
        if(this.que.length<this.max){
            this.que.push(val)
        }
    }
    dequeue(){
        if(this.que.length==0){
            console.log("queue is empty")
        }
        else{
            this.que.shift()
        }
    }
    size(){
        console.log(this.que.length)
    }
    isEmpty(){
       console.log( this.que.length==0)
    }
    isFull(){
        console.log(this.que.length==this.max)
    }
    peak(){
        console.log(this.que[0])
    }
    clear(){
        this.que=[]
    }
}

let queObj=new queue();
queObj.isEmpty()
queObj.enqueue(5)
queObj.enqueue(6)
queObj.enqueue(6)

// queObj.dequeue()
// queObj.dequeue()
queObj.size()
queObj.isFull()
queObj.peak()
queObj.clear()
console.log(queObj)