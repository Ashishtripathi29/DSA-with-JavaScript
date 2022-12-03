// there is an array sort that array with quick sort 

//pivot 

const swap=function(arr,index1,index2){
    [arr[index1],arr[index2]]=[arr[index2],arr[index1]]
}

function pivot(arr,start,end){
    let pivot=arr[start]
    let pivotIndex=start

   for(let i=start;i<end;i++){
    if(pivot>arr[i]){
        pivotIndex++
        
        swap(arr,pivotIndex,i)
    }
   }
   swap(arr,start,pivotIndex)
   return pivotIndex

}
function quickSort(arr,start=0,end=arr.length){
   
    if(start<end){

        let idx= pivot(arr,start,end)
    //  console.log(arr,idx)
          quickSort(arr,start,idx-1)
          quickSort(arr,idx+1,end)
    }
    else return arr
}
let arr=[-1,4,5,3,2,7,-5,6]
quickSort(arr)
console.log(arr)