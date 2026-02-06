# JS Katas

## Purpose
This repo provides three beginner‑friendly JavaScript katas with tests so learners can practice loops, conditionals, and nested loops and verify their solutions.

## Setup
No dependencies are required beyond Node.js. Just open the folder in your editor.

## Run Instructions
1. Open the kata file you’re working on (see list below).
2. Replace the `throw new Error('Not implemented')` line with your solution.
3. Run the tests to check your work.

Required commits per kata: **scaffold → feature → refactor** (see the Commit workflow section below).

### Coding requirements
- Include short comments that explain your logic choices (why you chose a loop, condition, or data shape).
- Keep the `globalThis.__katas` lines intact so tests can import your function.

```
 cd into the js-katas from the command line and navigate to the folder where the katas are stored on your computer. Then run:
node test-runner.js
# or
npm test
```

Katas:
- Loops kata: `katas/loops.js` — first N even numbers.
- Conditions kata: `katas/conditions.js` — FizzBuzz style exercise.
- Nested kata: `katas/nested.js` — multiplication table (nested loops).
  - Example: `multiplicationTable(3)` should return `[[1,2,3],[2,4,6],[3,6,9]]`.
  - Edge case: sizes less than 1 should throw an error.

## Known Issues
- Tests will fail until learners implement the kata functions (they currently throw `Not implemented`).
- Don’t remove or rename the `globalThis.__katas` lines in the kata files — the tests use them to import your functions.

## Commit workflow (required)
For each kata, make three commits in order:
1. **Scaffold** — open the kata file and add the basic function structure.
2. **Feature** — implement the working solution so tests pass.
3. **Refactor** — clean up variable names or structure without changing behavior.

Example commit messages:
- `scaffold: add firstNEven structure`
- `feature: implement firstNEven logic`
- `refactor: simplify loop in firstNEven`
