import React  from 'react';

import Button from '../../shared/Button/Button';

import './ChuckJoke.style.scss';

const ChuckJoke: React.FC = () => {
  return (
    <section className="app-chuck-joke">
      <blockquote>
        ola ola ola
      </blockquote>

      <Button label={ 'Another one...' } layout={'secundary'} />
    </section>
  );
};

export default ChuckJoke;
