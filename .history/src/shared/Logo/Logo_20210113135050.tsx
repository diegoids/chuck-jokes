import React from 'react';

import ChuckLogo from '../../assets/chuck-jokes-logo.svg';

import './Intro.style.scss';

const Intro: React.FC = () => {
  return (
    <img
      src={ ChuckLogo } 
      alt="Chuck Jokes" 
    />
  );
};

export default Intro;
