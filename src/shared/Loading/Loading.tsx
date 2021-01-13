import React from 'react';

import './Loading.style.scss';

const Button: React.FC = () => {
  return (
    <div className="app-loading">
      <div className="app-loading__loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Button;
