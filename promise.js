const first=new Promise(function(res,rej){
    setTimeout( res, 101,"first");
}
)
const second=new Promise(function(res,rej){
    setTimeout( res, 100,"second");
}
)
Promise.race([first,second]).then( res=>console.log(res))