//to add sum of n number

function addSumOfN(n){
    let total=0
    for(let i=1;i<=n;i++){
        total+=i
    }
    return total
}

// call the function
let res=addSumOfN(6)
console.log(res)


// now going with next aproch 
function sum_of_N_number(n){
return n*(n+1)/2
}

// call the function
let res2=sum_of_N_number(6)
console.log(res2)