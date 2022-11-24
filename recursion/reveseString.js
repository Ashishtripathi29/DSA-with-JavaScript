// reverse each word of string at own place but string does not reverse 
// ex= "hii hello" => "olleh iih"

function reverse(bitSt){
    if(bitSt.length==1) return bitSt[0]
    
    return reverse(bitSt.slice(1))+bitSt[0]
}


function reverseString(str){
    let stArr=str.split(" ")

    let stOutput=''
    for(let i=0;i<stArr.length;i++){
       stOutput= stOutput+" "+reverse(stArr[i])
    }
    return stOutput
}
let str="hello ashish I am here"
let res=reverseString(str)
console.log(res)