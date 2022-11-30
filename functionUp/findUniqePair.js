// find unique pairs of element (inside array ) where sum is wqual to target k
// arr=[7,2,4,6,9,11,34,3,2,1]

function uniquePair(arr,target){
    let map=new Map()

    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i])) map.set(arr[i],1)
        else map.set(arr[i],map.get(arr[i])+1)
        }

        let pair={}
    for(let ele of map){
        let sub=target-ele[0]
        if(map.has(sub) && sub!=ele[0] && pair[sub]==undefined) pair[ele[0]]=sub
    }
    return pair
}

let arr=[7,2,4,6,9,11,34,3,2,1]
let res=uniquePair(arr,5)
console.log(res)


