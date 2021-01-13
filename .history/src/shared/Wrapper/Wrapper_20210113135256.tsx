import React from 'react';

const Wrapper: React.FC = ({ children }) => {
  return (
    <main className="app-wrapper">
      { children }
    </main>
  );
};

export default Wrapper;
