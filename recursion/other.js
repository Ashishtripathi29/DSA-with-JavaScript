// this page about the recursion
// recursion is a function which call itself 
// it has a base cunditon and deffent input everytime 
// if we does not care about base condition than it can't end 
// untill stackOverFlow we have to controll that

// write a function which console 0 to input digit

// function printNum(number){
//     if(number==0) return 0  // this is base when function return and going return toward end
//     printNum(number-1)  // here function printNum() call itself
//     console.log(number)  // while returing it console every number in every time
// }
// printNum(10)



// write a function which console input to 0 digit

// function printNum(number){
//     if(number==0) return 0  // this is base when function return and going return toward end
//     console.log(number)  //  it console every number in every time
//     printNum(number-1)  // here function printNum() call itself  
// }
// printNum(10)


// write a function which return the sum of n natural number

// function sumOfNum(num) {
//     if(num==1) return 1
//     return num+sumOfNum(num-1)
// }
// let res=sumOfNum(5)
// console.log(res)


// // write a function which return the factorial of n 
// function factorial(num) {
//     if(num==2) return 2
//     return num*factorial(num-1)
// }
// let res=factorial(5)
// console.log(res)



// write a function to return the fibonacci num
function fibonacci(num) {
    if(num<=1 ) return 1
    return fibonacci(num-1)+fibonacci(num-2)
   
}

let res=fibonacci(1)
console.log(res)







// give an array of element and return array which contaion only even number

function evenArr(arr) {
    let newArr=[]
    if(arr.length==0) return arr
    if(arr[0]%2==0) newArr.push(arr[0])
    arr=newArr.concat(evenArr(arr.slice(1)))
    return arr
}

// let arr1=[1,2,3,4,5,6,7,8,9,0]
// let res=evenArr(arr1)
// console.log(res)
