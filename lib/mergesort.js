class MergeSort {

  sort(array) {
    if(array.length == 1) return;

    let pivot = Math.floor(array.length / 2);

    let left  = array.slice(0, pivot);
    let right = array.slice(pivot);

    let sortedLeft = this.sort(left);
    let sortedRight = this.sort(right);

    array = this.merge(sortedLeft, sortedRight);

    return array;
  }

  merge() {
    return [1];
  }

}

module.exports = MergeSort;
