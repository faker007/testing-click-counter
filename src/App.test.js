import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

const COMPONENT_APP = 'component-app';
const INCREMENT_BUTTON = 'increment-button';
const COUNTER_DISPLAY = 'counter-display';

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text(); // Always return String type!
  expect(count).toBe('0');
});

test('clicking the button, increments counter display', () => {
  const wrapper = setup();

  const button = findByTestAttr(wrapper, 'increment-button');

  button.simulate('click');

  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});

test('clicking, the increment button 2 times and decrement button once, it should be 1', () => {
  const wrapper = setup();

  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');

  incrementButton.simulate('click');
  incrementButton.simulate('click');

  decrementButton.simulate('click');

  const countText = findByTestAttr(wrapper, 'count').text();
  expect(countText).toBe('1');
});

describe('clicking, the decrement button, but it cant go below zero, and show the error message', () => {
  test('error when counter goes below 0', () => {
    const wrapper = setup();
    const errorElement = findByTestAttr(wrapper, 'error-message');

    const errorHasHiddenClass = errorElement.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  });

  describe('counter is 0 and decrement is clicked', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup();

      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
    });

    test('error shows', () => {
      const errorElement = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorElement.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(false);
    });

    test('counter still displays 0', () => {
      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe('0');
    });

    test('clicking increment, clears the error', () => {
      const incrementButton = findByTestAttr(wrapper, 'increment-button');

      incrementButton.simulate('click');

      const errorElement = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorElement.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(true);
    });
  });
});
