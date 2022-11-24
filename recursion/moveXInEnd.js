
// pass the string and all the "x" in string move end of the string


function XmoveInEnd(st,c,newString){
    if(st.length==0){
        for(let i=0;i<c;i++) newString+='x'
        console.log(newString)
        return;
    }  
   if(st[0]=='x') XmoveInEnd(st.slice(1),c+1,newString)
   else XmoveInEnd(st.slice(1),c,newString+st[0])
}


const st='xxabcxxd'
XmoveInEnd(st,0,'')
