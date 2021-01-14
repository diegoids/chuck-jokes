import React, { lazy, Suspense } from 'react';
import Loading from './shared/Loading/Loading';
import {
  HashRouter as Router,
  Switch, 
  Route 
} from 'react-router-dom';

export const ROUTES = {
  HOME: '/',
  JOKE: '/joke'
}

const Home = lazy(() => import('./views/home/Home'));
const Joke = lazy(() => import('./views/joke/Joke'));

const Routes = () => (
  <Router>
    <Suspense fallback={(<Loading />)}>
      <Switch>
        <Route path={ ROUTES.HOME } exact component={ Home } />
        <Route path={ `${ROUTES.JOKE}/:category` } exact component={ Joke } />
        <Route path="*" component={ Home }
        />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
