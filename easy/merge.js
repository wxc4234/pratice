/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if(m === 0) return nums2;
  if(n===0) return nums1;
  let i=m-1;
  let j=n-1;
  let num = m+n-1;
  let q;
  while(i>=0||j>=0) {
  //   if(nums1[i]<=nums1[j]) {
  //     q=nums2[j];
  //     j--;
  // }else{
  //   q=nums1[i];
  //   i--;
  // }
if(nums1[i]<nums2[j]) {
  nums1[num]=nums2[j];
  num--;
  j--;
}else{
  nums1[num]=nums1[i];
  num--;
  i--;
}
}
return nums1;
};
let nums1=[1,2,3,0,0,0];
let nums2=[2,5,6];
let m=3;
let n=3;
console.log(merge(nums1,m,nums2,n));