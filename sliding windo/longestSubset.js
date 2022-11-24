// find the longest subset

let arr=[2,4,6,100,70,4,5,91,20,3,60]
let k=3;

let maxSum=0
let maxLength=[]
let end=k
for(let i=0;i<k;i++){
     maxSum+=arr[i]
}
let tempSum=maxSum
for(let j=k;j<arr.length;j++){
    tempSum=tempSum-arr[j-k]+arr[j]
    if(maxSum<tempSum){
        end=j
        maxSum=tempSum
    }   
}
for(let l=end-k+1;l<=end;l++) maxLength.push(arr[l])
console.log(maxLength)