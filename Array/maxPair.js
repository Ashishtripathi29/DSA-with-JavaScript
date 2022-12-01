// there is an array contant random element return sum of max two element 

function maxSum(arr){

    let max=Math.max(arr[0],arr[1])
    let sMax=Math.min(arr[0],arr[1])

    for(let i=2;i<arr.length;i++){
        if(arr[i]>max){
            sMax=max
            max=arr[i]
        }
        else if(arr[i]>sMax) sMax=arr[i]
    }
    return max+sMax
}

let arr=[37,21,56,7,20]
let res=maxSum(arr)
console.log(res)


// there is an array contant rendom element return sum of max three element 

function maxThreeSum(arr){

    let max=-Infinity
    let sMax=-Infinity
    let tMax=-Infinity


    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            tMax=sMax
            sMax=max
            max=arr[i]
        }
        else if(arr[i]>sMax) {
            tMax=sMax
            sMax=arr[i]
        }
        else if(arr[i]>tMax) tMax=arr[i]
    }
    console.log(max,sMax,tMax)
    return max+sMax+tMax
}

let arr2=[37,21,56,77,244]
let res2=maxThreeSum(arr2)
console.log(res2)