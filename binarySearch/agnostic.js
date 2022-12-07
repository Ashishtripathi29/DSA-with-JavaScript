// write a function to search index of agnostic array  
// agnostic means accending or deccending


function agnostic(arr,target){

    let left=0;
    let right=arr.length-1;
    let mid;
    let acc=arr[0]<arr[right]
    while(left<=right){
        mid=Math.floor(left+(right-left)/2)

        if(arr[mid]==target) return mid
        else if(acc){
            if(arr[mid]>target){
                right=mid-1
            }
            else{
                left=mid+1
            }
        }
        else{
            if(arr[mid]>target){
                left=mid+1
            }
            else{
                right=mid-1
            }
        }
    }
    return -1
}


// let arr=[11,22,33,44,55,66,77]
let arr=[77,66,55,44,33,22,11]
let res=agnostic(arr,11)
console.log(res)