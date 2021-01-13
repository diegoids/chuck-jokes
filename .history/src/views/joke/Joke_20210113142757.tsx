import React  from 'react';
import { useParams } from "react-router";

import Wrapper from '../../shared/Wrapper/Wrapper';
import NavBar  from '../../components/NavBar/NavBar';
interface ParamTypes {
  category: string
}

const Joke = () => {
  const { category } = useParams<ParamTypes>();

  return (
    <Wrapper>
      <NavBar category={category} />
    </Wrapper>
  );
};

export default Joke;
