import React  from 'react';

import Svg from '../../shared/Svg/Svg';

import './Intro.style.scss';

const Intro: React.FC = () => {
  return (
    <section className="app-intro">
      <Svg type={ 'logo' } alt={ 'Chuck Jokes' } />

      <h1 className="app-intro__title">
        Chuck Jokes
      </h1>

      <p className="app-intro__desc">
        It's better to <strong>choose a category</strong> before Chuck Norris finds out:
      </p>
    </section>
  );
};

export default Intro;
