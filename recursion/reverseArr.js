//Reverse the array using recursion without using slice and without using extra array.

function reverse(arr,start,end){
    if(start>=end) return arr
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp
    return reverse(arr,++start,--end)
}

let arr=[1,2,3,4,5,6,7]
console.log(reverse(arr,0,arr.length-1))