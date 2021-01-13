import React  from 'react';

import Wrapper        from '../../shared/Wrapper/Wrapper';
import Intro          from '../../components/Intro/Intro';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const Home: React.FC  = () => {
  return (
    <main>
      <Wrapper>
        <Intro />
        <CategoriesList />
      </Wrapper>
    </main>
  );
};

export default Home;
