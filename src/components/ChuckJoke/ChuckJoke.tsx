import React  from 'react';

import ChuckApproves from '../../assets/chuck-approves.png';
import './ChuckJoke.style.scss';

interface Props {
  joke: string[]
}

const ChuckJoke: React.FC<Props> = ({ joke }) => {
  return (
    <section className="app-chuck-joke">
      <img className="app-chuck-joke__approves" src={ ChuckApproves } alt="Yes" />

      <blockquote className="app-chuck-joke__quote">
        <strong><i>{ joke }</i></strong>
      </blockquote>
    </section>
  );
};

export default ChuckJoke;
