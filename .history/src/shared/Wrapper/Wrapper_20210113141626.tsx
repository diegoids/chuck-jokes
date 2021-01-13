import React from 'react';

import './Wrapper.style.scss';

const Wrapper: React.FC = ({ children }) => {
  return (
    <main className="app-wrapper">
      { children }
    </main>
  );
};

export default Wrapper;
