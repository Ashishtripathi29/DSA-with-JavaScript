// input an random array and return accending array


// this is normal approch
// function ass(arr){{
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//  return arr;
// }}


// const arr=[23,11,25,45,66,77,44]
// let res=ass(arr)
// console.log(res)



// bubble sort

// function ass2(arr){
//     do{
//         var swap=false
//          for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swap=true
//             }
//          }
//     }
//     while(swap) ;
//     return arr
// }
// const arr=[23,11,25,45,66,77,44]
// let res=ass2(arr)
// console.log(res)