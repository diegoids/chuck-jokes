import React  from 'react';
import { useParams } from "react-router";

import Wrapper   from '../../shared/Wrapper/Wrapper';
import NavBar    from '../../components/NavBar/NavBar';
import ChuckJoke from '../../components/ChuckJoke/ChuckJoke';
interface ParamTypes {
  category: string
}

const Joke = () => {
  const { category } = useParams<ParamTypes>();

  return (
    <Wrapper>
      <NavBar category={category} />
      <ChuckJoke />
    </Wrapper>
  );
};

export default Joke;
