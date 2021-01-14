import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch }      from "react-redux";

import { ApplicationState }              from '../../store';
import * as CategoryActions              from '../../store/modules/categories/Categories.actions'

import Wrapper        from '../../shared/Wrapper/Wrapper';
import Loading        from '../../shared/Loading/Loading';
import Intro          from '../../components/Intro/Intro';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const Home: React.FC  = () => {
  const { data, loading, error } = useSelector( (state: ApplicationState) => state.categories );

  const dispatch = useDispatch();

  const handleCategory = useCallback(() => dispatch(CategoryActions.loadRequest()), [ dispatch ]);

  useEffect(() => { 
    handleCategory(); 
  }, [handleCategory]);

  if( error ) return (
    <div>Error</div>
  )
  
  return (
    <main>
      <Wrapper>
        <Intro />
        {
          loading
            ? <Loading />
            : <CategoriesList categories={data} />
        }
      </Wrapper>
    </main>
  );
};

export default Home;
