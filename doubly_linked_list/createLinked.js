class node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.pre=null;
    }
}

class list{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
}

let k=new node(5);
 k.next=new node(6);
 k.pre=k.next
console.log(k)