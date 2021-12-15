import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const COMPONENT_APP = 'component-app';

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find(`[data-test='${COMPONENT_APP}']`);
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter display starts at 0', () => {});

test('clicking the button, increments counter display', () => {});
