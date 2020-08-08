import React from 'react';
import {SortType} from '../../const.js';
import {propTypes} from '../../types/types.js';

const Sort = (props) => {

  const {
    onSortTypeClick,
    isActiveMenu,
    onSortMenuClick,
    currentSortType
  } = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => {
        onSortMenuClick(!isActiveMenu);
      }}>
        {currentSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={isActiveMenu
        ? `places__options places__options--custom places__options--opened`
        : `places__options places__options--custom`}>
        {
          Object.keys(SortType).map((sortType) => {
            return (
              <li className="places__option" tabIndex={0}
                key={sortType}
                onClick={() => {
                  onSortTypeClick(SortType[sortType]);
                }}>{SortType[sortType]}</li>
            );
          })
        }
      </ul>
    </form>
  );
};

Sort.propTypes = {
  onSortTypeClick: propTypes.onSortTypeClick,
  isActiveMenu: propTypes.isActiveMenu,
  onSortMenuClick: propTypes.onSortMenuClick,
  currentSortType: propTypes.currentSortType,
};

export default Sort;
