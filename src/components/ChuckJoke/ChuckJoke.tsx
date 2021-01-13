import React  from 'react';

import Button from '../../shared/Button/Button';

import ChuckApproves from '../../assets/chuck-approves.png';
import './ChuckJoke.style.scss';

const ChuckJoke: React.FC = () => {
  return (
    <section className="app-chuck-joke">
      <img className="app-chuck-joke__approves" src={ ChuckApproves } alt="Yes" />

      <blockquote className="app-chuck-joke__quote">
        <strong><i>ola ola ola</i></strong>
      </blockquote>

      <Button label={ 'Another one...' } layout={'secundary'} />
    </section>
  );
};

export default ChuckJoke;
