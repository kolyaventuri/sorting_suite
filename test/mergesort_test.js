require('./test_helper');

const MergeSort = require('../lib/mergesort');

xdescribe('MergeSort', () => {
  it('should be able to sort an array', () => {
    let mergeSort = new MergeSort();

    expect(mergeSort.sort([1,3,5,4,2])).to.eql([1,2,3,4,5]);
  });
});
