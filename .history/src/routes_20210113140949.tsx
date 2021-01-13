import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
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
    <Suspense fallback={(<div>loading</div>)}>
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
