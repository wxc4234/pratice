var removeDuplicates = function(nums) {
    if(nums.length==0){
        return 0;
    }
    var n=0;
    var m=1;
    while(m<nums.length){
        if(nums[m]!=nums[n]){
            n++;
            nums[n]=nums[m];
        }
        m++;
    }
    return n+1;
};
var nums=[1,1,2];

console.log(removeDuplicates(nums));