import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import NewReviewForm from './new-review-form.jsx';

it(`<NewReviewForm /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <NewReviewForm
          activePlaceCard={-1}
          onSubmitReviewClick={() => {}}
          onChangeNewReviewForm={() => {}}
          submitButtonDisabled={true}
          isSending={false}
          review={``}
          rating={0}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
