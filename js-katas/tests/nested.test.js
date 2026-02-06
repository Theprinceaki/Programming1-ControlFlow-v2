const assert = require('assert');
const { multiplicationTable } = require('../katas');

function run() {
  const res = multiplicationTable(3);
  assert.deepStrictEqual(res, [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9]
  ]);

  let threw = false;
  try { multiplicationTable(0); } catch (e) { threw = true; }
  assert.ok(threw, 'should throw for non-positive size');
}

module.exports = { run };
