import React from 'react';

import ChuckLogo from '../../assets/chuck-jokes-logo.svg';
import BackIcon  from '../../assets/back-icon.svg';

interface Props {
  type: string;
  alt: string;
}

const Intro: React.FC<Props> = ({ type, alt }) => {
  let img = null;

  switch (type) {
    case 'logo':
      img = ChuckLogo
      break;

    case 'back':
      img = BackIcon
      break;
  
    default:
      break;
  }

  if( !img ) return null;

  return (
    <img
      src={ img } 
      alt={ alt }
    />
  );
};

export default Intro;
