import React  from 'react';

import ChuckLogo from '../../assets/chuck-jokes-logo.svg';

import './Intro.style.scss';

const Intro = () => {
  return (
    <>
      <section className="app-intro">
        <img 
          className="app-intro__logo"
          src={ ChuckLogo } 
          alt="Chuck Jokes" 
        />

        <h1 className="app-intro__title">
          Chuck Jokes
        </h1>

        <p className="app-intro__desc">
          It's better to choose a <strong>category</strong> before chuck norris finds out:
        </p>
      </section>
    </>
  );
};

export default Intro;
