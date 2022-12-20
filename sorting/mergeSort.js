// // there is an array they have random n element sort that array with merge sort

function merge(arr,start,mid,end){

    let len1=mid-start+1;
    let len2=end-mid;

    let a=0;
    let b=0;
    
    let arr1=[];
    let arr2=[];
     
    for(let i=start;i<=mid;i++){
        arr1.push(arr[i])
    }
    for(let j=mid+1;j<=end;j++){
        arr2.push(arr[j])
    }

    let mergeArr=[]
    while(a<len1 && b<len2){
        if(arr1[a]<=arr2[b]) {
            mergeArr.push(arr1[a])
            a++
        }
        else{
            mergeArr.push(arr2[b])
            b++
        }

    }
    while(a<len1){
        mergeArr.push(arr1[a])
        a++
    }
    while(b<len2){
        mergeArr.push(arr2[b])
        b++
    }
    for(let k=0;k<mergeArr.length;k++){
        arr[start]=mergeArr[k]
        start++
    }
}


function mergeSort(arr,start,end){

    if(start>=end) return; // base condition 
    let mid=Math.floor(start+(end-start)/2)  // mid of array
    mergeSort(arr,start,mid);     // left part of array
    mergeSort(arr,mid+1,end)         // rigth part of array

    merge(arr,start,mid,end)
}


// let arr=[2,3,4,6,5,7,3]
let arr=[2,3,4,6,5,7,3,10,33,22,22,22,23]
mergeSort(arr,0,arr.length-1)
console.log(arr)



