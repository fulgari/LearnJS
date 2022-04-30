//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

/**
 * 
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

 function maxSubArray(nums) {
     let dp = []
     let max = nums[0]
     dp.fill(0)
     if(nums[0] > 0) {
         dp[0] = nums[0]
     }
     for(let i=1; i<nums.length; i++) {
         if(nums[i] + dp[i-1] > nums[i]) {
             dp[i] = nums[i] + dp[i-1]
         } else {
             dp[i] = nums[i]
         }
         if(dp[i]>max) {
             max = dp[i]
        }
     }
     return max
 }

 console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))