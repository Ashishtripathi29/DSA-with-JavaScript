// pass a string and check that is sorted or not

function isSorted(st){
    if(st.length==1) return true
    if(st[0]>=st[1]) return false
    return isSorted(st.slice(1))
}

let sorted=[1,2,3,4,5,7,10]
console.log(isSorted(sorted))