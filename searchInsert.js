/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var searchInsert = function(nums, target) {
//     let low=0;
//     let high=nums.length-1;
//     while(low<=high){
//         let mid=Math.floor((low+high)/2);
//         if(nums[mid]==target){
//             return mid;
//         }
//         if(nums[mid]<target){
//             low=mid+1;
//         }else{
//             high=mid-1;
//         }
//     }
//     return low;
// }

var searchInsertion = function(nums, target){
    let i=0;
    while(i<nums.length){
        if(nums[i]<target){
            i++;
        }else if(nums[i]>target){
            return i;

        }else  return i;
    }
    return i;
}

var nums=[1,3,5,6];
var target=7;
console.log(searchInsertion(nums,target));