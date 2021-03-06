import React from 'react';
import renderer from 'react-test-renderer';
import PieChart from '../';

// mock nested components
jest.mock('components/PieChart/Path');
jest.mock('components/Chart', () => 'div');
jest.mock('components/Legend', () => 'div');

it('renders correctly', () => {
  const tree = renderer.create(<PieChart dataLabel="test" dataKey="test" data={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
