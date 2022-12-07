// 3Sum Closest

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

var threeSumClosest = function(nums, target) {
    nums.sort((e1,e2)=>e1-e2)
    let deff=Number.MAX_VALUE
    let closestSum=0
   
   for(let i=0;i<nums.length-1;i++){
    let left=i+1
    let right=nums.length-1
    while(left<right){
        let sum=(nums[i]+nums[left]+nums[right])
        
        if(sum==target){
            return sum
        }
        else if(sum>target){
            right--
        }
        else{
            left++
        }
       let  currentDeff=Math.abs(sum-target)
        if(currentDeff<deff){
            deff=currentDeff
            closestSum=sum
        }
    }
   }
   return closestSum
};
 

let nums = [-1,2,1,-4], target = 1
let res=threeSumClosest(nums,target)
console.log(res)