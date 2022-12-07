//Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.


// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4


function pivot(nums,start,end){
    let pivot=nums[start]
    let pivotIndex=start
       for(let i=start;i<=end;i++){
           if(nums[i]<pivot){
               pivotIndex++
            [nums[i],nums[pivotIndex]]=[nums[pivotIndex],nums[i]]
           
           }
       }
       [nums[start],nums[pivotIndex]]=[nums[pivotIndex],nums[start]]
       
       return pivotIndex
}
var findKthLargest = function(nums, k) {
   let start=0;
   let end=nums.length-1
   k=nums.length-k
   while(start<=end){
     let pivotIndex=pivot(nums,start,end)
     if(pivotIndex==k) 
     {
       
           return nums[k]
     }
     else if(pivotIndex>k){
         end=pivotIndex-1
     }
     else{
         start=pivotIndex+1
     }
   }

   
   
};

let  nums = [3,2,1,5,6,4], k = 1
let res =findKthLargest(nums,k)
console.log(res)