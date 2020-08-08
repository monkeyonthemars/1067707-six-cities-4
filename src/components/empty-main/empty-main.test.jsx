import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import EmptyMain from './empty-main.jsx';

it(`<EmptyMain /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <EmptyMain
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
