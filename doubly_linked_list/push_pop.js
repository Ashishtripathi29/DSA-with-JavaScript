class node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.pre=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let newNode=new node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            newNode.pre=this.tail;
            this.tail=newNode;
        }
        this.length++
    }
    pop(){
        let popedData=this.tail
        if(this.length==0) return undefined;
        else if(this.length==1) {
            this.head=null
            this.tail=null;
        }
        else{
            this.tail=this.tail.pre;
            this.tail.next=null
        }
        this.length--;
        return popedData.val
    }
}

let list=new linkedList();
console.log(list)
list.push(5)
list.push(6)
list.push(7)
console.log(list.pop())
console.log(list.pop())
console.log(list)