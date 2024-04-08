
var RandomizedSet = function() {
    this.set = new Set();
    this.arr = [];
    this.map = new Map();
    this.size = 0;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    }
    this.map.set(val, this.size);
    this.arr[this.size] = val;
    this.size++;
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false;
    }
    let index = this.map.get(val);
    let last = this.arr[this.size - 1];
    this.arr[index] = last;
    this.map.set(last, index);
    this.map.delete(val);
    this.size--;
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.size);
    return this.arr[randomIndex];
};

let randomSet = new RandomizedSet();


/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */