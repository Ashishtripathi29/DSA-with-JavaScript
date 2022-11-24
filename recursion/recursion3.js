



// // this function is return reverse of string

// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse('ashish'))



// // isPalidrone solution

// function isPalidrone(str){

//     if(str.length==1) return true
//     if(str.length==2) return str[0]==str[1]
//     if(str[0]!=str[str.length-1]) return false
//     return isPalidrone(str.slice(1,str.length-1))
// }

// console.log(isPalidrone('abcba'))
const  callback=(Number)=>Number%2===0
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}
console.log(someRecursive([1,1,5],callback))






// recursion is a fuction that call it self again and again with different parameter it must be have a base condition
// base condition is a return point from there function return if there is no base condition it call again and again it self and it  stop until errase maximum stack call error  " that means there is a stack mamory and in every call it going to store function variable and in a certion condition it full 'there is no space in stack mamrory'  that's why we need to mation base condition"
// parameter should be pass right 



// now we are going to make a function which return reverse a string 

 function reverse(str){
	if(str.length <= 1) return str;   
   
           // this is base condition when string length become 1 or less than one that time we return that string  and return key return the data frome where it call
	return reverse(str.slice(1)) + str[0];          // here we call the function with defferent parameter  every time subtract one charactor from start and pass in the last it remender one charactor and that time owr base conditon return that string , and which charactor we subtract we concat that end of the function 


// now we visulise the call 

// when we pass "abc" that time length is 3 and owr base condion is false
// than we pass reverse("bc")+a
// again base condition is false 
// then we pass reverse("c")+b
// now base codndtion is true and return c
// now it c+b=cb
// this function call from reverse("bc")+a
// than it return cb and cb+a become cba 
 }
 console.log(reverse('abc'))
  



