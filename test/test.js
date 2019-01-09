const factory = require('../scripts/setup.js');
const assert = require('assert');

describe('my suite', ()=> {
  describe('test string convert to nr', ()=> {

    it('should convert a string to a number', ()=> {
      assert.equal(factory.convertToNr('5'),5);
    })
  })
describe('test make pallindrom', ()=> {
  it('should reverse the string which was passed', ()=> {
    const actualResult = factory.makePallindrom('jake');
    const expectedResult = 'ekaj';

    assert.strictEqual(actualResult,expectedResult);

  })
  it('should return false if arg isnt a string', ()=> {
    const actualResult = factory.makePallindrom(75);
    const expectedResult = false;

    assert.strictEqual(actualResult,expectedResult);

  })
})

}) // suite
