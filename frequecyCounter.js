// we have two array one of them have number and second one of them have squre of fist element of array 

// first we write a function in basic approch which hai n**2 time complexity

function checkFrequency(arr1,arr2){
    // both array of length should be same
    if(arr1.length!==arr2.length) return false
    
    // check in arr2 have squre of every element or not if not then return false
    for(let i=0;i<arr1.length;i++){
        let currentIndex=arr2.indexOf(arr1[i]**2)
        if(currentIndex===-1) return false
        arr2.splice(currentIndex,1)
    }

    // if for loop complete run successful then return true 
    return true

}

const arr1=[1,2,3,4,4]
const arr2=[1,4,16,9,16]
let res=checkFrequency(arr1,arr2)
console.log(res)