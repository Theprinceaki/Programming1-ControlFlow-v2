const assert = require('assert');
const { firstNEven } = require('../katas');

function run() {
  // happy path
  assert.deepStrictEqual(firstNEven(5), [2,4,6,8,10]);
  // default
  const d = firstNEven();
  assert.strictEqual(d.length, 10);
  assert.deepStrictEqual(d.slice(0,3), [2,4,6]);

  // edge cases
  assert.deepStrictEqual(firstNEven(0), []);
  let threw = false;
  try { firstNEven(-1); } catch (e) { threw = true; }
  assert.ok(threw, 'should throw for negative n');
}

module.exports = { run };
