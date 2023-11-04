// class Solution {
// public:
//     void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
//         int i=m-1;
//         int j=n-1;
//         int p=m+n-1;
//         int q;
//         while(i>=0||j>=0)
//         {
//             if(i<0){
//                 q=nums2[j--];
//             }else if(j<0){
//                 q=nums1[i--];
//             }else
//             if(nums1[i]>nums2[j]){
//                 q=nums1[i--];
//             }else {
//                 q=nums2[j--];
//             }
//             nums1[p--]=q;
//         }
//     }
// };


// 使用了尾部插入方式
// 将nums1和nums2的最后一位的元素进行对比，将大的放在nums1的尾部，如果nums1的尾部更大，则nums2尾部的指针不变，
// 将nums1尾部的指针往前移一位，否则将nums2的值赋给nums1的尾部，同时将nums2的指针向前移一位
// 然后重复操作就能得到结果