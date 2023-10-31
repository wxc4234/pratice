/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let i=0;
    // let len=0;
    // let str=s.length;
    // while(str>0){
    //     if(s[str]!=' '){
    //         str--;
    //         len++;
    //     }else if(s[str]==' '){
    //         str--;
    //     }
    //     i++;
    // }     
    // return len; 

    
    let i=s.length-1;
    let len=0;
    let flag=true;
    if(i>0){
        while(flag){
            if(s[i]!=' '){
                if(i==0){
                    return 1;
                }
                break;
            }else i--;
        }
        while(i>=0){
            if(s[i]!=' '){
                len++;
                i--;
            }else{
                return len;
            }
        }
    }else return 1;
    return len;
};
// var s= "   fly me  too  the moon  ";
// var s= "Hello World";
// var s= "luffy is still joyboy";
var s= "day"

console.log(lengthOfLastWord(s));