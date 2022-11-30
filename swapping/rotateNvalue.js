// there is an array and givan a value we have to rotate owr array n time anticlock wise
// [1,2,3,4,5] n=2   output  [4,5,1,2,3]


function rotate(arr,d){

    let left=0
    let right=arr.length-1
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    left=0
    right=d-1
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    left=d
    right=arr.length-1
    while(left<right){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    return arr

}


let arr=[1,2,3,4,5,6]
let res=rotate(arr,1)
console.log(res)