/*
    * 
    * * 
    * * *
    * * * *
    * * * * * *
   
*/

// draw above graph


function tree(n){
    
    for(let i=0;i<n;i++){
        let st=''
        for(let j=0;j<n;j++){
            if(j<=i) st=st+"*"+" "
        }
        console.log(st)
        st=''
    }
}
tree(5)

console.log("  ")


/*
    * * * * *
    * * * *
    * * *
    * *
    *
   
*/

// draw above graph


function tree2(n){
    
    for(let i=0;i<n;i++){
        let st=''
        for(let j=0;j<n;j++){
            if(j>=i) st=st+"*"+" "
        
        }
        console.log(st)
        st=''
    }
}
tree2(5)

console.log("       ")

/*
      * 
     * * 
    * * * 
   * * * *
  * * * * * 
   
*/

// draw above graph

function tree3(n){
    
    for(let i=0;i<n;i++){
        let st=''
        for(let j=n*2;j>=0;j--){
            if(j>=n-i && j<=n+i) st=st+"*"
            else st=st+" "
        }
        console.log(st)
        st=''
    }
}
tree3(5)

console.log()
/*

  * * * * *
   * * * *
    * * *
     * *
      *
   
*/

// draw above graph
function tree4(n){
    
    for(let i=0;i<n;i++){
        let st=''
        for(let j=0;j<n;j++){
            if(j>=i) st=st+"*"+" "
            else st=st+' '
        }
        console.log(st)
        st=''
    }
}
tree4(5)