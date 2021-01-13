import React, { useEffect, useCallback } from 'react';
import { useParams }                     from "react-router";
import { useSelector, useDispatch }      from "react-redux";

import { ApplicationState }              from '../../store';
import * as JokeActions                  from '../../store/modules/joke/Joke.actions'

import Button    from '../../shared/Button/Button';
import Wrapper   from '../../shared/Wrapper/Wrapper';
import Loading   from '../../shared/Loading/Loading';
import NavBar    from '../../components/NavBar/NavBar';
import ChuckJoke from '../../components/ChuckJoke/ChuckJoke';

interface ParamTypes {
  category: string
}

const Joke = () => {
  const { category } = useParams<ParamTypes>();

  const { data, error, loading } = useSelector( (state: ApplicationState) => state.joke );

  const dispatch = useDispatch();

  const handleJoke = useCallback(() => dispatch(JokeActions.loadRequest(category)), [
    dispatch,
    category
  ]);

  useEffect(() => {
    handleJoke();
  }, [handleJoke]);

  if( loading ) return <Loading />;

  if( error ) return (
    <div>Error</div>
  )

  return (
    <Wrapper>
      <NavBar category={category} />
      <ChuckJoke joke={data} />
      
      <Button onClick={handleJoke} label={ 'Another one...' } layout={'secundary'} />
    </Wrapper>
  );
};

export default Joke;
