// function bubleSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let t=true
//         for(let j=i+1;j<arr.length;j++){
            
//             if(arr[i]>arr[j]){
//                 console.log(arr,arr[i],arr[j])
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//                 t=false
//             }
//         }
//         if(t) break
//         console.log("done")
//     }
//     return arr
// }

// const arr=[8,7,6,5,9,9,9]
// let res=bubleSort(arr)
// console.log(res)


// mathod 2

// function bubleSort2(arr){
//     for(let i=arr.length;i>0;i--){
//         for (let j = 0; j < i-1; j++) {
//             if(arr[j]>arr[j+1]){
//                console.log(arr,arr[j],arr[j+1])
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
            
//         }
        
//         console.log("done")
//     }
//     return arr
// }
// const arr=[8,7,6,5,4]
// let res=bubleSort2(arr)
// console.log(res)


// after ES 6 

// function bubleSort3(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//         console.log(arr)
//     }
//     return arr
// }
// const arr=[8,7,6,5,4]
// let res=bubleSort3(arr)
// console.log(res)






