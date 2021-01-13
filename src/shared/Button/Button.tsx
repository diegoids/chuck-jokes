import React from 'react';
import Svg from '../Svg/Svg';

import './Button.style.scss';

interface Props {
  label: string;
  layout?: 'secundary' | 'back';
  onClick?: () => {}
}

const Button: React.FC<Props> = ({ onClick, label, layout }) => {
  const addClass = !!layout ? `app-button--${layout}` : 'app-button--primary';

  return (
    <button className={`app-button ${addClass}`} onClick={onClick}>
      { layout === 'back' && <Svg type={ 'back' } alt={ label } /> }
      { label }
    </button>
  );
};

export default Button;
