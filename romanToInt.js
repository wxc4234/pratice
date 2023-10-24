/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let math={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }
   var arr = s.split('') 
    var num=0
    var i
    for (i in arr) {
        if(math[arr[i]]<math[arr[Number(i)+1]]) {
            num=num-math[arr[i]]  
    }else{
        num=num+math[arr[i]]
    }
}
return num
}