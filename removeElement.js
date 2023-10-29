var removeElement = function(nums, val) {
    var i=0;
    var j=0;
    while(j<nums.length) {
        if(nums[j]!=val){
            nums[i]=nums[j];
            i++;
        }
         j++;
    }
    return i;
};
var nums=[3,2,2,3]
var val=3

console.log(removeElement(nums, val));