// Sort Array By Parity

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]

var sortArrayByParity = function(nums) {
    let left=0
    let right=nums.length-1

    while(left<right){
        while(nums[left]%2==0 && left<right){
            left++
        }
        while(nums[right]%2==1 && left<right){
            right--
        }
        [nums[left],nums[right]]=[nums[right],nums[left]]
    }
    return nums
};

let nums = [3,1,2,4]
let res=sortArrayByParity(nums)
console.log(res)