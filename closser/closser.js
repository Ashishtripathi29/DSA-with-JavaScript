// closser in javaScript is a function inside an another function 
// the inner function access his own variable the variable define in outer function as well as globle variable 

function outer(){
        let a=10
       function inner(){
           let b=a+10
              function inner2(){
                let in2=b+10
                return in2
              }
            return inner2
        }
        return inner
}

let k=outer()()()
console.log(k)