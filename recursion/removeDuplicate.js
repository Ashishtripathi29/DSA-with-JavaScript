// remove all the duplicate char from the string

const map=new Map()

function removeDuplicate(st,i){
    if(i==st.length){
        return st
    }
    if(map.has(st[i])) {
        st=st.slice(0,i)+st.slice(i+1)
        i--
    }
    else map.set(st[i]) 
    return removeDuplicate(st,i+1)
}
console.log(removeDuplicate("abccddddpp",0))