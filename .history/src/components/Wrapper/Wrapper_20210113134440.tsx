import React  from 'react';

const Wrapper = ({ children }) => {
  return (
    <main className="app-wrapper">
      { children }
    </main>
  );
};

export default Wrapper;
