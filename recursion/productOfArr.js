// write a program to return product of arr


function product(arr){
    if(arr.length==0) return 0
    if(arr.length==1) return arr[0];
    let [,...resEle]=arr
    return arr[0]*product(resEle)
} 
const element=[1,2,3,4,5,6,7]
let result=product(element)
console.log(result)