// print permutaion of string
// permutaion means all the posible substring of string 
// this program has o(n!) time complexity
function printPerm(str,permutaion){
    if(str.length==0){
        console.log(permutaion)
        return;
    }
    for(let i=0;i<str.length;i++){
        let newstr=str.slice(0,i)+str.slice(i+1)
        printPerm(newstr,permutaion+str[i])
    }
}
let st='abc'
printPerm(st,'')


