var s=["()"];
var isValid = function(s){
    let len=s.length;
    if(len%2!=0){
        return false;
    }
    let length=len/2;
    for(var i=0;i<length;i++){
        s=s.replace("()","");
        s=s.replace("[]","");
        s=s.replace("{}","");
    }
    return s.length ==0 ;
}