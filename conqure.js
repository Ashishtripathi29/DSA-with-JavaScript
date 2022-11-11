// this function is going to run for conquer code 
// should be an sorted array and pass an value which you want to search if there is value than return index of value other wise return -1 
function conqure(arr,num){
    let min=0;
    let max=arr.length;
    
    while(min<max){
      // start search vealue from middle if value is greater than mid value then divide array from mid and search value mid to last 
      // repeate this concept untill get the value
        let middle=Math.floor((min+max)/2)
        if(arr[middle]<num){
            min=middle+1
        }

          // when value is small to mid value of array than divide your array and search value start to mid 
        else if(arr[middle]>num)  max=middle-1

          // if get value then return that index
        else return middle
    }
// other wise return -1
return -1
}
let arr=[1,2,3,4,5,6,7,8,9,10]
let arr2=[1,2,3,4,5,6,11,23,45,66]
let res=conqure(arr2,10)
console.log(res)