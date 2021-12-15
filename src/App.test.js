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
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = shallow(<App />);
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = shallow(<App />);
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {});

test('clicking the button, increments counter display', () => {});
