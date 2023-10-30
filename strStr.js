var strStr = function(haystack, needle) {
    // for(var i=0;i<haystack.length;i++){
    //     if(haystack[i]==needle[i]){
    //         n++;
    //     }
//     while(i<haystack.length){
//         if(haystack[i]!=needle[n]){
//             i++;
//             if(i==haystack.length ){
//                 return -1;
//             }
//     }else {
//         n++;
//         i++;
//     }

//     if(n==needle.length){
//         return i-needle.length;
//     }
   
// }

 if(needle.length > haystack.length) {
    return -1;
}
for(let i = 0; i < haystack.length; i++) {
    let flag = true;
    for(let j = 0; j < needle.length; j++) {
        if(haystack[i + j] !== needle[j]) {
            flag = false;
            break;
        }
    }
    if(flag) {
        return i;
    }
}
return -1;

};
var haystack="hello";
var needle="hl";

console.log(strStr(haystack, needle));