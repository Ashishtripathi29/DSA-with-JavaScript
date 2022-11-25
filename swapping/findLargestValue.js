// there is an array return maximum sum of two number

function sumOfTwoNumber(arr){
    
    let max=arr[0]
    let secondMax=-Infinity

    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            secondMax=max
            max=arr[i]
        }
        else if(arr[i]>secondMax){
             secondMax=arr[i]
        }
    }
    return max+secondMax
}
const arr=[5,2,3,7,6]
let res=sumOfTwoNumber(arr)
console.log(res)