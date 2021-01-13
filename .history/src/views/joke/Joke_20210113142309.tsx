import React  from 'react';
import { useParams } from "react-router";

import Wrapper from '../../shared/Wrapper/Wrapper';
interface ParamTypes {
  category: string
}

const Joke = () => {
  const { category } = useParams<ParamTypes>();

  return (
    <Wrapper>
      ola
    </Wrapper>
  );
};

export default Joke;
