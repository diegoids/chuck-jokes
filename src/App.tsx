import React  from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store'

import './config/styles/theme.global.scss';

const App = () => {
  return (
    <Provider store={ store }>
      <Routes />
    </Provider>
  );
};

export default App;
