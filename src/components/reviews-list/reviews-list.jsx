import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item.jsx';
import {propTypes} from '../../types/types.js';

const ReviewsList = (props) => {

  const {currentComments} = props;

  return (
    <div>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{currentComments.length}</span>
      </h2>
      <ul className="reviews__list">
        {currentComments
          .map((comment) => {
            return (
              <React.Fragment key={comment.id}>
                <ReviewsItem
                  comment={comment}
                />
              </React.Fragment>
            );
          })}
      </ul>
    </div>
  );
};

ReviewsList.propTypes = {
  currentComments: propTypes.currentComments
};

export default ReviewsList;
