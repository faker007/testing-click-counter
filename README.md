# Learning with me, Jin

React 테스팅 도구인 Jest와 Enzyme에 대해서 배워요! 🎉

## Learning points

### 1. Removing data-test attributes

- `$ npm install --save-dev babel-plugin-react-remove-properties`
- `$ npm run eject`
- `$ following the babel config`
  [Click me](https://www.npmjs.com/package/babel-plugin-react-remove-properties)
- `$ npm run build`
- `data-test atrributes are gone! 😎`

### 2. DRY props and cons

- DRY = Don't Rpeat Yourself
- Goals for test code not the same as for production code.
- Want failing tests to be easy to diagnose
- Sometimes this means repeated code
- Balance between DRY and easily diagnosed tests

### 3. One expect per test

- Test descriptions provide better documentation
- Failure counts give better indication of state of code
  - Test stops at first failure
- Can use `beforeEach()` for common setup

### 4. Counter display tests

- Test text displayed on page
  - Not state value
  - Testing behavior, not implementation!
- The plan: counter value will be in a `<span>`
  - data-test attribute `count`
  - Test that value is 0 initially
  - Next lecture: simulating clicks
- Use `Enzyme.text()` method

  - [Doc link](https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/text.html)

### 5. Don't find too early!

- Elements are unreliable after wrapper has changed

## Lessons Summary

### 27. Acceptance Test and Review (인수 테스트, E2E)

- Set up a (very) simple React app with Jest and Enzyme
- Used Enzyme's shallow() function to render a component
- Tested that required DOM elements were rendered using find()
- Used Enzyme's .text() method to extract the text of an element
- Tested component for updates after interaction
- Created re-usable `setup()` and `findByTestAttr()` functions

### 28. Click Counter Challenages

- Create a new button with the text "Decrement Counter"
- When the new button is clicked decrement the counter

### 28-2. No Count Below Zero

- If the counter is at zero, and the decrement button is clicked:
  - Don't decrement the counter
  - Display an error message saying counter can't go below zero
  - Clear Error on Increment
