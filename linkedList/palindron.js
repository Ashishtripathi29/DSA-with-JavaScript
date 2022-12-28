class node{
    constructor(val){
        this.val=val
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    add(val){
        let newNode=new node(val)
        !this.head? this.head=newNode :this.tail.next=newNode
        this.tail=newNode   
    }
}
function checkPalindron(arr){
    let list=new linkedList()
    for(let i=0;i<arr.length;i++){
        list.add(arr[i])
    }  
    function palindron(head){
        if(!head || !head.next) return true
        let slow=fast=head
        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }

        let pre=null,next
        while(head!=slow){
            next=head.next
            head.next=pre
            pre=head
            head=next
        }
        if(fast) slow=slow.next

        while(pre){
            if(pre.val!=slow.val) return false
            pre=pre.next
            slow=slow.next
        }
        return true
    }
    head=list.head
    return palindron(head)
}

let arr=[1,2,1]
console.log(checkPalindron(arr))

