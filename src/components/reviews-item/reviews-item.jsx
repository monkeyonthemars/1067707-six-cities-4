import React from 'react';
import {propTypes} from '../../types/types.js';

const ReviewsItem = (props) => {

  const {comment} = props;

  const dateOptions = {
    year: `numeric`,
    month: `long`
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            alt="Reviews avatar"
            width={54}
            height={54}
          />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(comment.rating) * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>
          {new Date(comment.date).toLocaleString(`en-US`, dateOptions)}
        </time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  comment: propTypes.comment
};

export default ReviewsItem;
