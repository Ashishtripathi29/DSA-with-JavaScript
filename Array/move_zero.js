// https://leetcode.com/problems/move-zeroes/description/

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


var moveZeroes = function(nums) {
  
    // let left=0
    // let right=nums.length
    // while(left<right){

    //     while(nums[left]==0 && left<right){
    //      nums.splice(left,1)
    //      nums.push(0)
    //      right--
    //     }  
    //   left++  
    // }

    let i=0;
    let j=0;

    while(i<nums.length){
        if(nums[i]!=0){
            nums[j++]=nums[i]
            
        }
        i++
    }
    while(j<nums.length){
            nums[j++]=0  
        }
  


    return nums
};


let arr=[0,5,0,4,2,0,3]
let res=moveZeroes(arr)
console.log(res)