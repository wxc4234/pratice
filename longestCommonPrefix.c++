//javascript
// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// strs=["flower", "flights", "flow"]
// var longestCommonPrefix = function(strs) {
//     if(strs.length == 0) 
//         return "";
//     let ans = strs[0];
//     for(let i =1;i<strs.length;i++) {
//         let j=0;
//         for(;j<ans.length && j < strs[i].length;j++) {
//             if(ans[j] != strs[i][j])
//                 break;
//         }
//         ans = ans.substr(0, j);
//         if(ans === "")
//             return ans;
//     }
//     return ans;



//c++
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {

    for(int i=0;i<strs[0].length();i++){
          char s=strs[0][i];
        for(int j=1;j<strs.size();j++)
        {
            if(i==strs[j].length()||strs[j][i]!=s){
                return  strs[0].substr(0,i);
            }
        }
    }
    return  strs[0];
}
};