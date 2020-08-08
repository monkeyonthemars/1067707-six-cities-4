import React, {createRef} from 'react';
import {Redirect} from 'react-router-dom';
import {propTypes} from '../../types/types.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {AppRoute} from '../../const.js';
import Header from '../header/header.jsx';

const SignIn = (props) => {
  const {
    onSubmit,
    authorizationStatus,
    email
  } = props;

  const loginRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return authorizationStatus === AuthorizationStatus.AUTH
    ? <Redirect to={AppRoute.ROOT} />
    : (
      <div className="page page--gray page--login">
        <Header
          authorizationStatus={authorizationStatus}
          email={email}
        />

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                    ref={loginRef} />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required=""
                    ref={passwordRef} />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
          </div>
        </main>

      </div>
    );
};

SignIn.propTypes = propTypes.placeCard;

SignIn.propTypes = {
  onSubmit: propTypes.onSubmit
};

export default SignIn;
