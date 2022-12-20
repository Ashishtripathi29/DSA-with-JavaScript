
function SelectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let lowest=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[lowest]>arr[j]) {
                
                lowest=j
                
            }

        }
        console.log(arr,arr[i],arr[lowest])
        if(lowest!=i){
            
            let  temp=arr[i]
                 arr[i]=arr[lowest]
                 arr[lowest]=temp
        }
    }
    return arr
}



let arr=[11,25,3,7,33,2]

let res=SelectionSort(arr)
console.log(res)


// function SelectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let lowest=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[lowest]>arr[j]){
//                 lowest=j
//             }
//         }
//         if(i!=lowest){
//             [arr[lowest],arr[i]]=[arr[i],arr[lowest]]
//         }
//     }
//     return arr
// }

// let arr=[11,25,3,7,33,2]

// let res=SelectionSort(arr)
// console.log(res)