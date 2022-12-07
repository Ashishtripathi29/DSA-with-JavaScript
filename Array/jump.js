// Minimum number of jumps


// Given an array of N integers arr[] where each element represents the max length of the jump that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.

// Note: Return -1 if you can't reach the end of the array.


// Example 1:

// Input:
// N = 11 
// arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 
// Output: 3 
// Explanation: 
// First jump from 1st element to 2nd 
// element with value 3. Now, from here 
// we jump to 5th element with value 9, 
// and from here we will jump to the last. 
// Example 2:

// Input :
// N = 6
// arr = {1, 4, 3, 2, 6, 7}
// Output: 2 
// Explanation: 
// First we jump from the 1st to 2nd element 
// and then jump to the last element.


function minJumps(arr,n){
    //code here
    let count=0
   
    for(let i=0;i<n;i++){
        if(i>=n-1) return count
        if(arr[i]==0){
            return -1
        } 
        else if(arr[i]==1){
             count++
            continue
        } 
        else{
            count++
            let max=arr[i+1]
            let index=i+1
            let l=1
            for(let j=i+2;j<=i+arr[i];j++){
                if(j>=arr.length-1) return count
                if(max<=(arr[j]+l)){
                    max=arr[j]
                    index=j
                    l=0
                }
                l++
            }
          
            i=index-1
        }
    }
    return -1
}

let  arr= [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9] 
let res=minJumps(arr,arr.length)
console.log(res)