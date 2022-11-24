// there is an array which has some element in ascending order (with distinct values).

function returnIndex(arr,target){
    let left=0;
    let right=arr.length-1;
    let mid;
    
    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(arr[mid]==target){
            return mid
        }
        else if(arr[left]<=arr[mid]){
            if(target<arr[mid] && target>=arr[left]){
                right=mid-1
            }
            else{
                left=mid+1
            }
        }
        else{
            if(target>arr[mid] && target<=arr[right]){
                left=mid+1
            }
            else{
                right=mid-1
            }
        }
    }
    return -1
}
let arr=[7,8,9,1,2,3,4,5,6]
let res=returnIndex(arr,3)
console.log(res)
