
var groupAnagrams = function (strs) {
  const map = new Map();

  const getKey = (a) => {
      // 将字母排序后用作 map key，如 'eve' => 'eev'， 'vee' => 'eev'
      return a.split('').sort().join('')
  }

  for (let item of strs) {
      // 获取 item 的 key，保证相同字母组合的 key 相同。
      const key = getKey(item);
      if (map.get(key)) {
          map.get(key).push(item); // 如果 map 中已有 key，直接 push
      } else {
          map.set(key, [item]); // 如果 map 中没有 key，set 一个新的数组
      }
  }
  return [...map.values()]; // 返回 map 的 value 数组
};
