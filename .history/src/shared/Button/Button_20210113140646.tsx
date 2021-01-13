import React from 'react';

interface Props {
  label: string;
  layout: 'primary' | 'secundary' | 'back';
}

const Button: React.FC<Props> = ({ label, layout }) => {
  const addClass = !!layout ? `app-button--${layout}` : '';

  return (
    <button className={`app-button ${addClass}`}>{ label }</button>
  );
};

export default Button;
