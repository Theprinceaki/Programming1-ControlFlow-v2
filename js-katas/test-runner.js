// Simple test runner: requires each test and runs its exported run() function.
const path = require('path');
const tests = [
  './tests/loops.test.js',
  './tests/conditions.test.js',
  './tests/nested.test.js'
];

let failures = 0;
for (const t of tests) {
  try {
    const testModule = require(path.resolve(__dirname, t));
    if (typeof testModule.run !== 'function') {
      console.error(`Test module ${t} does not export run()`);
      failures++;
      continue;
    }
    testModule.run();
    console.log(`✔ ${t} passed`);
  } catch (err) {
    failures++;
    console.error(`✖ ${t} failed:`);
    console.error(err && err.stack ? err.stack : err);
  }
}

if (failures > 0) {
  console.error(`\n${failures} test file(s) failed`);
  process.exit(1);
} else {
  console.log('\nAll tests passed');
}
