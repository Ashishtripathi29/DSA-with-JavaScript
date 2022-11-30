function fooBar(num){
    
    if(num%5==0 && num%3==0){
        return "fooBar"
    }
    else if(num%3==0){
        return "foo"
    }
    else if(num%5==0){
        return 'baar'
    }
    return "nothing"
}

let number=10
let res=fooBar(number)
console.log(res)