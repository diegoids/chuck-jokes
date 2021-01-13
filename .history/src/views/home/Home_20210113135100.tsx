import React  from 'react';

import Intro from '../../components/Intro/Intro';
import Wrapper from '../../components/Wrapper/Wrapper';

const Home: React.FC  = () => {
  return (
    <main>
      <Wrapper>
        <Intro />
      </Wrapper>
    </main>
  );
};

export default Home;
