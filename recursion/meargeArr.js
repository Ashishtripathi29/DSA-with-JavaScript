var isPalindrome = function (x) {

    for (let i = 0; i < x.length; i++) {

        if (x[i] != x[x.length - i - 1]) {
            console.log(x[i], x[x.length - i - 1])
            return false
        }

    }
    return true


}
let a = [1, 2, 3, 2, 1]
console.log(isPalindrome(a))

var isPalindrome2 = function(s) {
    let st=''
    for(let i=0;i<s.length;i++){
        if([A-Za-z].test(s[i])) st+=s[i]
    }
    console.log(st)
};
isPalindrome2("abxd")