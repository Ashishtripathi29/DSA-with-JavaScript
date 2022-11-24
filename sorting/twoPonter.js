// create a function which make an array where is all the data is unique
// array should be sorted 
// it return new array

function unique(arr){
    let i=0
    let j=0
    let arr2=[arr[0]]
    
    while(j<arr.length){
        if(arr[i]!==arr[j]){
            arr2.push(arr[j])
            i=j
        }
        j++
    }
    return  arr2
}
let arrr=[1,2,2,2,2,3,3,3,4,4,5,6,7,8,8]

let res=unique(arrr)
console.log(res)


// now going to modify same array of unique element but which is array is come that is sorted

function sortedArr(arr){
    let i=0
    let j=0
    while(j<arr.length){
        if(arr[i]!=arr[j]){
            i++
            arr[i]=arr[j] 
        }
        j++
    }
    i++
    let len=arr.length
    while(i<len) {
        arr.pop()
        i++
    }
    console.log(i)
    return arr
}

let arr3=[1,2,2,2,2,3,3,3,4,4,5,6,7,8,8,11,12,23]

let res2=sortedArr(arr3)
console.log(res2)
