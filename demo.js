let arr = [5,2,7,2,9,6,2,11,4]

const swap = (arr,left,right)=>{
let temp = arr[left]
arr[left] = arr[right]
arr[right] = arr[temp]
}

const partition = (arr,low,high)=>{
     pivot_element = arr[high]
     let i = low-1;

      for (let j=low; j<high; j++){
        if(pivot_element>arr[j]){
            i++;
            swap(arr,i,j);
        }
     }
     swap(arr, i+1, high)
     return i+1
}
const quickSort = (arr,low,high)=>{
    if(low<high){
        let pivot_index = partition(arr,low,high)
        quickSort(arr,low,pivot_index-1)
        quickSort(arr,pivot_index+1,high)
    }
}


quickSort(arr,0,8)
console.log(arr)