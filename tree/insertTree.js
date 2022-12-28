// class node{
//     constructor(val){
//         this.val=val;
//         this.left=null;
//         this.right=null
//     }
// }

// class BTS{
//     constructor(){
//         this.root=null;
//     }

//     insert(val){
//         let newNode=new node(val);
//         if(!this.root){
//             this.root=newNode
//             return this;
//         }
//         else{
//             let current=this.root;
//             while(true){
//                 if(newNode.val==current.val)return undefined;
//                 if(current.val>newNode.val){
//                     if(!current.left){
//                         current.left=newNode;
//                         return this;
//                     }
//                     else{
//                         current=current.left
//                     }
//                 }
//                 else if(current.val<newNode.val){
//                         if(!current.right){
//                             current.right=newNode
//                             return this
//                         }
//                         else{
//                             current=current.right
//                         }
//                 }
                
//             }
//         }
//     }

// }

// let arr=[5,7,6,9,8,2]
// let tr=new BTS;
// for(let i=0;i<arr.length;i++) tr.insert(arr[i])
// console.log(tr.root)

