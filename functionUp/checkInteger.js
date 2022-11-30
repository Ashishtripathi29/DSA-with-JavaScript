// there is an number check this is interger or not 

// mathod 1
//  function checkInt(num){
//     let i=0
//     num=`${num}`
//     console.log(typeof num,num)
    
//     if(num[0]=="-") i=1

//     for(i;i<num.length;i++){
//         if(!(num[i]>=0 && num[i]<=9)) return false
//     }
//     return true
// }

// mathod 2

function checkInt(num){
    let i=0
    num=`${num}`
    console.log(typeof num,num)

    return /^-?[0-9]+$/.test(num)
}

let res=checkInt("1245")
console.log(res)