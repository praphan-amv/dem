import React from 'react';
import { shallow } from 'enzyme';
import App from '../../containers/App';

test('Render App', () => {
  const component = shallow(
    <App />,
  );
  expect(component).toMatchSnapshot();
});
