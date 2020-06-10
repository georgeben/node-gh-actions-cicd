const { isEven } = require('../src/utils/calculations');
const assert = require('assert');


describe('Unit test for calculator', () => {
  it('isEven', () => {
    assert(isEven(2) === true)
  });
})
