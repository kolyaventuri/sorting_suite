Array.prototype.max = function() {
  return this.reduce((max, current) => {
    return current > max ? current : max;
  });
};

Array.prototype.min = function() {
  return this.reduce((min, current) => {
    return current < min ? current : min;
  });
};

Array.prototype.mean = function() {
  let max = this.max();
  let min = this.min();

  let trueMiddle = max - ((max - min) / 2);

  let deltas = this.map((n) => {
    return [n, Math.abs(n - trueMiddle)];
  });
  let i = 0;
  let val = deltas.reduce((min, current) => {
    if(current[1] < min[1]) i +=1;
    return current[1] < min[1] ? current : min;
  })[0];

  return [i, val];
};

class QuickSort {
  constructor(array) {
    this.array = array;
    this.pivots = {};
  }

  pivot(arr) {
    arr = arr || this.array;
    let mean = arr.mean();

    return {
      index: mean[0],
      value: mean[1]
    };
  }

  sort(arr) {
    arr = arr || this.array;
    if(arr.length < 2) return arr;

    let pivot = this.pivot(arr);

    let left = arr.filter(n => n < pivot.value);
    let right = arr.filter(n => n > pivot.value);

    return this.sort(left).concat([pivot.value]).concat(this.sort(right));
  }
}
module.exports = QuickSort;
