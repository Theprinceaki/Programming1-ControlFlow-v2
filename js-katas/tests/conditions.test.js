const assert = require('assert');
const { fizzBuzz } = require('../katas');

function run() {
  const res = fizzBuzz(15);
  // check specific positions (1-based index)
  assert.strictEqual(res[0], 1);
  assert.strictEqual(res[2], 'Fizz'); // 3
  assert.strictEqual(res[4], 'Buzz'); // 5
  assert.strictEqual(res[14], 'FizzBuzz'); // 15

  // default length
  const def = fizzBuzz();
  assert.strictEqual(def.length, 100);

  // invalid
  let threw = false;
  try { fizzBuzz(-5); } catch (e) { threw = true; }
  assert.ok(threw, 'should throw for negative n');
}

module.exports = { run };
