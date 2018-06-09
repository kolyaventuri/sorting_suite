require('./test_helper');
const QuickSort = require('../lib/quicksort');

describe('QuickSort', () => {
  it('should be able to store an array', () => {
    let quickSort = new QuickSort([1,2]);
    expect(quickSort.array).to.be.an('array').that.eqls([1,2]);
  });

  it('should be able to select a pivot', () => {
    let quickSort = new QuickSort([1,3,5,4,2]);
    let pivot = quickSort.pivot();

    expect(pivot).to.have.property('index').that.equals(1);
    expect(pivot).to.have.property('value').that.equals(3);
  });
});
