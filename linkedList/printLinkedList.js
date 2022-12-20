class node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

// let list=new node(5)

// list.next=new node(6)

// list.next.next=new node(8)

// console.log(list)

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newely=new node(val)
        if(!this.head){
            this.head=newely
            this.tail=newely
        }
        else{
            this.tail.next=newely
            this.tail=newely
        }
        this.length++;
    }
    traverse(){
        let cur=this.head
        while(cur){
            console.log(cur.val)
            cur=cur.next
        }
    }
    pop(){
        let cur=this.head

        if(this.length==1){
            this.head=null
            this.tail=null
            this.length--;
            return cur.val

        }
        while( cur.next.next!=null){
            cur=cur.next
        }
        let out=cur.next
        cur.next=null
        this.tail=cur
        this.length--;
        return out.val
    }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("Ashish")
list.push("Tripathi")
// list.traverse()
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
list.traverse()
console.log(list)
