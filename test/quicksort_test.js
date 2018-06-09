require('./test_helper');
const QuickSort = require('../lib/quicksort');

describe('QuickSort', () => {
  let quickSort = new QuickSort();

  it('should be able to select a pivot', () => {
    let pivot = quickSort.pivot([1,3,5,4,2]);

    expect(pivot).to.have.property('index').that.equals(1);
    expect(pivot).to.have.property('value').that.equals(3);
  });
});
