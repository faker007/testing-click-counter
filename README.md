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
