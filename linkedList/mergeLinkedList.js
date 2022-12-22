class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class linkedList1{
    constructor()  {
        this.head=null;
        this.tail=null
        this.length=0;
    }
    push(val){
        let newNode=new node(val);

        if(!this.head){
            this.head=newNode;
        }
        else{
            this.tail.next=newNode;
        }
        this.tail=newNode;
        this.length++
        }
    }
class linkedList2{
    constructor()  {
        this.head=null;
        this.tail=null
        this.length=0;
    }
    push(val){
        let newNode=new node(val);

        if(!this.head){
            this.head=newNode;
        }
        else{
            this.tail.next=newNode;
        }
        this.tail=newNode;
        this.length++
        }
    }
   
let list1=new linkedList1()
let list2=new linkedList2()

let arr1=[0,1,3,4]
let arr2=[1,2,4]

for(let i=0;i<arr1.length;i++) list1.push(arr1[i])
for(let i=0;i<arr2.length;i++) list2.push(arr2[i])

function merge(list1,list2){
    if(!list1) return list2
    if(!list2) return list1

    if(list1.val<list2.val){
        list1.next=merge(list1.next,list2)
        return list1
    }
   else{
        list2.next=merge(list1,list2.next)
        return list2
    }
}

let res=merge(list1.head,list2.head)

while(res){
    console.log(res.val)
    res=res.next
}