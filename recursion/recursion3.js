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

  



