//to add sum of n number

// function addSumOfN(n){
//     let total=0
//     for(let i=1;i<=n;i++){
//         total+=i
//     }
//     return total
// }

// // call the function
// let res=addSumOfN(6)
// console.log(res)


// // now going with next aproch 
// function sum_of_N_number(n){
// return n*(n+1)/2
// }

// // call the function
// let res2=sum_of_N_number(6)
// console.log(res2)



// same function with time duaration

function addUpTo1(n) {
    return n * (n + 1) / 2;
  }
  
  var time1 = performance.now();
  addUpTo1(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

  function addUpTo2(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  
  var t1 = performance.now();
  addUpTo2(1000000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)