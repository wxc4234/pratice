/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  if (temperatures.length === 0) return [];
  const stack = [];
  const result = new Array(temperatures.length).fill(0);
  //Array().fill()在这里是为了初始化一个长度为temperatures.length的数组，每个元素都是0
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) { //如果当前温度大于栈顶温度
      const idx = stack.pop(); //弹出栈顶温度的索引,pop()方法用于删除并返回数组的最后一个元素
      result[idx] = i - idx; //将栈顶温度的索引对应的结果数组元素赋值为当前温度的索引减去栈顶温度的索引
    }
    stack.push(i); //将当前温度的索引入栈
  }
  return result;


};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // [1, 1, 4, 2, 1, 1, 0, 0]