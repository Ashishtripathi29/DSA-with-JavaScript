// https://leetcode.com/problems/merge-sorted-array/
// . Merge Sorted Array



// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109
 



//================================ answer ===========================

// var merge = function(nums1, m, nums2, n) {
    //    const [...nums3]=nums1
    //    let j=0;
    //    let i=0;
    //    let k=0;
    //    while(k<m+n){
    //        if(i==m){
    //              nums1[k]=nums2[j]
    //              j++
    //        }
    //        else if(j==n){
    //                    nums1[k]=nums3[i]
    //                    i++
    //        }
    //       else if(nums3[i]<nums2[j]){
    //            nums1[k]=nums3[i]
    //            i++
               
    //        }
    //        else {
    //             nums1[k]=nums2[j] 
    //             j++
    //        }
    //        k++
    //    }
    // };
    
    
    // source mathod 1
    // var merge = function(nums1, m, nums2, n) {
    //     var x = 0,
    //         y = 0;
        
    //     nums1.splice(m, nums1.length);
    //     nums2.splice(n, nums2.length);
        
    //     while(y < n){
    //         if(nums2[y] < nums1[x] || nums1[x] === undefined){
    //             nums1.splice(x, 0, nums2[y]);
    //             x++;
    //             y++;    
    //         } else {
    //             x++;
    //         }
    //     }
    // };
    
    
    // source with own mathod
    
    // var merge = function(nums1, m, nums2, n) {
    // let x=0,y=0;
    // nums1.splice(m,nums1.length)
    // let [...nums3]=nums1
    
    // while(x+y<m+n){
    //     if(nums3[x]<nums2[y] || nums2[y]==undefined){
    //         nums1[x+y]=nums3[x]     
    //         x++
    //     }
    //     else{
    //         nums1[x+y]=nums2[y]
    //         y++
    //     }
       
    // }
    // }
    
    var merge = function(nums1, m, nums2, n) {
    
    let i=m-1;
    let j=n-1;
    let k=nums1.length-1
        while(j>=0 && i>=0){
            if(nums1[i]<nums2[j]){
                nums1[k--]=nums2[j--]
            }
            else{
                 nums1[k--]=nums1[i--] 
            }
        }
    
        while(j>=0){
           nums1[k--]=nums2[j--]
           }
        while(i>=0){
            nums1[k--]=nums1[i--]
        }
    return nums1
    }

    let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    let res=merge(nums1,m,nums2,n)
    console.log(res)
    
    