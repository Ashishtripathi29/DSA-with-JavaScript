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

    // ============================================ push data =============================================
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
   // ============================================== pop data =============================================    
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

    // ============================================== shift data ===============================================
    shift(){
        let popedData=this.head
        if(this.length==0) return undefined;
        else if(this.length==1) {
            this.head=null
            this.tail=null;
        }
        else{
            this.head=this.head.next;
            this.head.pre=null
        }
        this.length--;
        return popedData.val
    }
   // ======================================================= unshift ==========================================
   unshift(val){
    let newNode=new node(val);
    if(!this.head){
        this.head=newNode;
        this.tail=newNode;
    }
    else{
        newNode.next=this.head; 
        this.head.pre=newNode
        this.head=newNode;
    }
    this.length++
}

// ===================================================== insert data =======================================
insert(val,index){
    let newNode=new node(val);
    if(index<0 || index>=this.length){
        console.log( "out of index")
        return;
    }
    else if(index==0){
        this.unshift(val)
    }
    else{

        let curIn=0;
        let curData=this.head
        while(curIn!=index){
            curData=curData.next
            curIn++
        }
        // console.log(curData,curData.pre)
        curData.pre.next=newNode
       newNode.pre=curData.pre
        newNode.next=curData
        curData.pre=newNode
        this.length++
    }
    
}
// ======================================== traverse ==========================
  traverse(){
    let cur=this.head;
    while(cur){
        console.log(cur.val)
        cur=cur.next
    }
  }
}
let list=new linkedList();
// console.log(list)
// list.push(5)
// list.push(6)
// list.push(7)
// console.log(list.pop())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
list.unshift(5)
list.unshift(6)
list.unshift(7)
list.insert(9,1)
list.traverse()
// console.log(list)