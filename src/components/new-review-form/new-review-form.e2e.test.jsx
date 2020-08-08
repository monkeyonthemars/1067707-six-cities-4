import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewReviewForm from './new-review-form.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Handler should get data on submit review click`, () => {
  const submitReviewClickHandler = jest.fn();

  const property = shallow(
      <NewReviewForm
        activePlaceCard={-1}
        onSubmitReviewClick={submitReviewClickHandler}
        onChangeNewReviewForm={() => {}}
        submitButtonDisabled={true}
        isSending={false}
        review={``}
        rating={0}
      />
  );

  property.find(`.reviews__form`).simulate(`submit`, {
    preventDefault: () => {},
  });

  expect(submitReviewClickHandler).toHaveBeenCalledTimes(1);
});
