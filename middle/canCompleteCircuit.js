/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let n = gas.length;
  let sumGas = 0, sumCost = 0;
  for (let i = 0; i < n; i++) {
    sumGas += gas[i];
    sumCost += cost[i];
  }
  if (sumGas < sumCost) { // 总油量小于总消耗，无法走完一圈
    return -1;
  }
  let start = 0, tank = 0;
  for (let i = 0; i < n; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }
  return start;

};
let gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));