// there is two number swap between can take tamprary variable

let a=5,b=10;
let temp=a
a=b
b=temp

console.log(a,b)  // 10,5


// there is two number swap between tham without tamprary variable
 

let first=10
let second=20;

first=first+second  // 30
second=first-second  //30-20=10
first=first-second  // 30-10=20
console.log(first,second)


// there is two string swap that 

let st1="ashish";
let st2="tripathi"

st1=st1+st2
st2=st1.slice(0,-st2.length)
st1=st1.slice(st2.length)
console.log(st1,st2)


