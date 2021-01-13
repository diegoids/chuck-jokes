import React  from 'react';
import { useParams } from "react-router";

interface ParamTypes {
  category: string
}

const Joke = () => {
  const { category } = useParams<ParamTypes>();

  return (
    <div>
      Hello { category }
    </div>
  );
};

export default Joke;
