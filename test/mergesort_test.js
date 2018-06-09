require('./test_helper');

const MergeSort = require('../lib/mergesort');

describe('MergeSort', () => {
  it('should be able to sort an array', () => {
    let mergeSort = new MergeSort([1,3,5,4,2]);

    expect(mergeSort.sort()).to.eql([1,2,3,4,5]);
  });
});
