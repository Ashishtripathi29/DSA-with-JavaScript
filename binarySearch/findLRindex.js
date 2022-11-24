// there is an array with some element return left and right index of target element 

function occur(arr,target){
    let left=0;
    let right=arr.length;
    let mid;
    let rightIndex=-1
    let leftIndex=-1

    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(arr[mid]==target){
            leftIndex=mid
            right=mid-1
        }
        else if(arr[mid]<target){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }

    right=arr.length;
    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(arr[mid]==target){
            rightIndex=mid
            left=mid+1
        }
        else if(arr[mid]<target){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return [leftIndex,rightIndex]
}
const arr=[2,3,4,5,5,5,5,5,5,5,6,7]
let res=occur(arr,3)
console.log(res)