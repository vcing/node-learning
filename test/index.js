var assert = require('assert');
const index = require('../index.js');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('index', function() {
    it('should be number 2',function() {
        assert.equal(index.a,2);
    });

    it('should be 233',() => {
        assert.equal(index.testB,233);
    });

    it('should be equal',() => {
        assert.deepEqual(index.testB,index.testFuncB());
        assert.deepEqual(index.testB,index.testFunc());
    });
})