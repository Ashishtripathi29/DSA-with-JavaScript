class stack{

    constructor() {
        this.stackList=[]
        this.max=10;
    }

    add(val){
        if(this.stackList.length<this.max){
            this.stackList.push(val)
        }
        else{
            console.log("stack is fulled")
        }
    }
    remove(){
        if(this.stackList.length!=0){
            this.stackList.pop()
        }
        else{
            console.log("stack is empty")
        }
    }
    peak(){
        if(this.stackList.length!=0){
            console.log(this.stackList[this.stackList.length-1])
        }
        else{
            console.log("stack is empty")
        }
    }
    size(){
        console.log(this.stackList.length)
    }
    clear(){
        this.stackList=[]
    }
    isEmpty(){
        return this.stackList.length==0
    }
    isFull(){
        return this.stackList.length==this.max
    }

}

let list=new stack()
console.log(list.isEmpty())
list.add(5)
list.add(5)
list.add(6)
list.add(5)
list.remove()
list.peak()
list.size()
console.log(list.isFull())
list.clear()

console.log(list)

