import React from 'react';

import './Wrapper.style.scss';

interface Props {
  className?: string
}

const Wrapper: React.FC<Props> = ({ children, className }) => {
  const compClass = `app-wrapper ${!!className ? className : ''}`
  
  return (
    <main className={ compClass }>
      { children }
    </main>
  );
};

export default Wrapper;
