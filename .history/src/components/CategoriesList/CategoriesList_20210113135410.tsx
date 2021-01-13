import React  from 'react';

import ChuckLogo from '../../shared/Logo/Logo';

import './Intro.style.scss';

const Intro: React.FC = () => {
  return (
    <section className="app-intro">
      <ChuckLogo />

      <h1 className="app-intro__title">
        Chuck Jokes
      </h1>

      <p className="app-intro__desc">
        It's better to choose a <strong>category</strong> before chuck norris finds out:
      </p>
    </section>
  );
};

export default Intro;
