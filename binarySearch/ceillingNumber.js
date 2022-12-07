// there is an array and target find the ceilling number 

function ceilling(arr,target){

    let left=0
    let right=arr.length;
    let mid

    while(left<right){
        mid=Math.floor(left+(right-left)/2)

        if(arr[mid]==target) return arr[mid]
        else if(arr[mid]>target) right=mid
        else left=mid+1
    }
    return arr[right]
}

let arr=[1,4,7,9,12]
let res=ceilling(arr,1)
console.log(res)