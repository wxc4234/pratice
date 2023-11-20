// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
// var addBinary = function(a, b) {
// let i=a.length-1;
// let j=b.length-1;
// let res='';
// let c=0;
// for(i;i>=0;i--)
// for(j;j>=i;j--){
//     if(a[i]+b[j]===2){

//     }
// }
// };
// let a="11";
// let b="1";
// console.log(addBinary(a, b));

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1
	let j = b.length - 1
	let up = 0
	let res = []
	while (i >= 0 || j >= 0) {
		let cur1 = a.charAt(i) - '0'
		let cur2 = b.charAt(j) - '0'
		let temp = cur1 + cur2 + up
		if (temp >= 2) {
			up = 1
			temp -= 2
		} else {
			up = 0
		}
		i--
		j--
		res.unshift(temp + '')
	}
	if (up !== 0) {
		res.unshift(up + '')
	}
	return res.join('')
};
let a="11";
let b="1";
console.log(addBinary(a, b));