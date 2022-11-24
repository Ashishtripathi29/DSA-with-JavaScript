// there is an array find the value which come more than one time 
// arr=[1,2,4,5,2,6,4]  output=[2,4]



function duplicate(arr){

    let map=new Map();
    for(let i=0;i<arr.length;i++){

        // if value already in the map than increment that value by 1
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }
        else{
            // otherwise set 1 of that value in map
            map.set(arr[i],1)
        }
    }
    // now all the value and that frequency set in the map we can check the frequency by run over the map 
    // make a new  empty arr with output name  to store the duplicate value 

    let output=[]
    for( let pair of map){
        // all the map value store come in pair number by number as a array in the array there is value two value like [1,2]  [3,5]
        // at the 0 index is key and at 1 index is value 

        if(pair[1]>1) output.push(pair[0])
    }
    // now all the duplicate value store in the output array 
    // return output
    return output
}

let arr=[1,2,4,5,2,4,6]

let res=duplicate(arr)
console.log(res)





// mathod 2

function duplicate2(arr){

    let map=new Map()
    let output=[]
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])) output.push(arr[i])
        else map.set(arr[i],1)
    }
    return output
}

let res2=duplicate2(arr)
console.log(res2)