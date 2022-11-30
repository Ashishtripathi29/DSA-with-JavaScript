// there is an array and in the array have multimple element some element come more than 1 time retun only uique number in the array


function uniquPair(arr){
    let map=new Map();

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])) map.set(arr[i],map.get(arr[i])+1)
        else map.set(arr[i],1)
    }

    let count=0
    let pair=[]
    for(let ele of map){
        if(ele[1]==1){
           pair.push(ele[0])
            count++
        } 
    }
    return {numberOfPair:count,pair:pair}
}

let arr=[1,2,3,4,4,3,5,7,3,1,7,9]
let res=uniquPair(arr)
console.log(res)