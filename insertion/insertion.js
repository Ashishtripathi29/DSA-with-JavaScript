// function insertionSort(arr) {
//     for (let i = 1; i<arr.length; i++) {
//       let currentValue=arr[i]
//       for(var j=i;j>=0 && arr[j-1]>currentValue;j--)  {
//          arr[j]=arr[j-1]
//       }     
//       arr[j]=currentValue 
//     }
//     return arr
// }
// const arr=[0,0,5,6,8,1,2,4,0]
// let res=insertionSort(arr)
// console.log(res)


// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         console.log(j)
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// console.log(insertionSort([2,1,1,76,4]))










// function insertionSort2(arr){
//     for(let i=1;i<arr.length;i++){
//         let currentVal=arr[i]
//         for(var j=i-1;j>=0 && arr[j]>currentVal;j--){
//             arr[j+1]=arr[j]
//         }
//         arr[j+1]=currentVal
//     }
//     return arr
// }

// console.log(insertionSort2([2,1,1,76,4,0]))
