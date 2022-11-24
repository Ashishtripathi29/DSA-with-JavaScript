


// let a=123985632
// let num=0
// while(a!=0){
// let lastDigit=a%10
// a=Math.floor(a/10)
// num=num*10+lastDigit
// }
// console.log(num)


// let num=0
// function solution(a) {
//   //Write your solution here
//     if(a==0) return num
//     let lastDigit=a%10
//     a=Math.floor(a/10)
//     num=num*10+lastDigit
//     return solution(a)
    
// }

// let a=123985632
// let res=solution(a)
// console.log(res)

function fib(n){
   if(n<2) return 1
   let res=fib(n-1)+fib(n-2)
   console.log(res)
   return res
}
fib(7)





// function printPowerSet(arr,index,current){
//   if(index==arr.length){
//     console.log(current)
//     return;
//   }
//   printPowerSet(arr,index+1,current)
//   let [...t]=current
//   t.push(arr[index])
//   printPowerSet(arr,index+1,t)  
// }

// let arr=[1,2,3,4]
// printPowerSet(arr,0,[])



