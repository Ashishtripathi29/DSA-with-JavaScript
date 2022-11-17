// write a program to get number and power of the number and output n**m 

function power(base , exponant){
    if(exponant==1) return base
    return base*power(base,exponant-1) 
}
let res=power(2,3)
console.log(res)

