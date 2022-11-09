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

// const arr1=[1,2,3,4,4]
// const arr2=[1,4,16,9,16]
// let res=checkFrequency(arr1,arr2)
// console.log(res)


// now we going to check frequency with refector approch it has o(n) time complexity 

function toCheckFrequency(arr1,arr2){
    // check length of both array should be same length
    if(arr1.length!==arr2.length) return false

    // make two object for count both element of array
    const obj1={}
    const obj2={}

    // run for loop for arr1 and store frequency of element in obj1
    for(let i=0;i<arr1.length;i++) {
        obj1[arr1[i]]=(obj1[arr1[i]]|| 0)+1
    }

    // run for loop for arr2 and store frequency of element in obj2
    for(let j=0;j<arr2.length;j++) {
        obj2[arr2[j]]=(obj2[arr2[j]]|| 0)+1
    }
    

    // now stored both array of frequeny in obj1 and obj2 
    // check respectaly frequency is equal or not 

   let key=Object.keys(obj1)
   for(let k=0;k<key.length;k++){
    if(obj1[key[k]]!=obj2[key[k]**2]) return false
   }
   return true
}

const arr1=[1,2,3,4,4]
const arr2=[1,4,16,9,16]
let res=toCheckFrequency(arr1,arr2)

console.log(res)