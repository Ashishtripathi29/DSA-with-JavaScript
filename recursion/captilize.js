// captilize first later of each word
// arr=['abc','bcd','cde']


// when we pass only array of string that time crate an static empty array
let arr2=[]
function captilize(arr){
    if(arr.length==0) return arr2
    arr2.push(arr[0][0].toUpperCase()+arr[0].slice(1))
   return  captilize(arr.slice(1))
}
let arr=['abc','bcd','cde']
console.log(captilize(arr))


// also can be make empty array in the function

function captilize4(arr){
    let result=[]
    if(arr.length==0) return []
    result.push(arr[0][0].toUpperCase()+arr[0].slice(1))
   return  result.concat(captilize4(arr.slice(1)))
}
let arr5=['abc','bcd','cde']
console.log(captilize4(arr5))


// when we pass also 0 as a second parameter that time no need to create any array

function captilize2(arr,idx){
    if(arr.length==idx) return arr
    arr[idx]=arr[idx][0].toUpperCase()+arr[idx].slice(1)
    return captilize2(arr,idx+1)
}
let arr3=['abc','bcd','cde']
console.log(captilize2(arr3,0))


// now pass only array and does not make any empty array

function captilize3(arr,idx=0){
    if(arr.length==idx) return arr
    arr[idx]=arr[idx][0].toUpperCase()+arr[idx].slice(1)
    return captilize3(arr,idx+1)
}
let arr4=['abc','bcd','cde']
console.log(captilize3(arr4))