import React from 'react';
import {Link} from 'react-router-dom';
import {propTypes} from '../../types/types.js';
import {AppRoute} from '../../const.js';
import {AuthorizationStatus} from '../../const.js';

const Header = (props) => {

  const {
    authorizationStatus,
    email
  } = props;

  const authInfo = authorizationStatus === AuthorizationStatus.NO_AUTH
    ? <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.LOGIN}
      href="#"
    >
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
    : <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.FAVORITES}
      href="#"
    >
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{email}</span>
    </Link>;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authInfo}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: propTypes.authorizationStatus,
  email: propTypes.email,
};

export default Header;
