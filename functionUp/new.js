// Find elements with at least 1 alpha & 1 num 
// I/P : [true,123,"str123","sone","ss12@#"]
// O/P: ["str123", "ss12@#"]


// function pass(arr){
//     let outArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(/(?=.*?[0-9])(?=.*?[A-Za-z]).+/i.test(arr[i])) outArr.push(arr[i])
//     }
//     return outArr
// }

// let arr=[true,123,"str123","sone","ss12@#","23A..."]
// let res=pass(arr)
// console.log(res)


// mathod 2

function pass(arr){
    let outArr=[]
    for(let i=0;i<arr.length;i++){
        let char=0
        let num=0
       let st=arr[i]
        for(let j=0;j<st.length;j++){
            if((st[j].charCodeAt(0)>=97 && st[j].charCodeAt(0)<=122 ) ||(st[j].charCodeAt(0)>=65 && st[j].charCodeAt(0)<=90) ) {
                
                char++
            }
            else if(st[j].charCodeAt(0)>=48 && st[j]<=57) {
               
                num++
            }           
        }  
        if(char>0 && num>0) outArr.push(arr[i])
    }
    return outArr
}

let arr=[true,123,"str123","sone","ss12@#","23A..."]
let res=pass(arr)
console.log(res)