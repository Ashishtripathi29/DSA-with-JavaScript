// binary seach is to seach element in array which is sorted it point the middle element from left and right
// it is faster than leaner search 
// search element is in array or not 

function search(arr,value){
let min=0
let max=arr.length-1

while(min<=max){
let middle=Math.floor((min+max)/2)
if(arr[middle]==value) return true
else if(arr[middle]> value) max=middle-1
else min=middle+1
}
return false
}
const arr=[1]
let res=search(arr,2)
console.log(res)