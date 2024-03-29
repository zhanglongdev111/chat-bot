import React from 'react';
import { create } from 'react-test-renderer';

import Projects from '../../Projects';

jest.mock('../../../Common/ProjectItem', () => 'ProjectItem');

const mockComponent = props => (
  <Projects {...props} />
);

describe('components/Pages/<Projects />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
