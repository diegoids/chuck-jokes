import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route 
} from 'react-router-dom';

const ROUTE_HOME = '/';
const ROUTE_JOKE = '/joke/:category';

const Home = lazy(() => import('./views/home/Home'));
const Joke = lazy(() => import('./views/joke/Joke'));

const Routes = () => (
  <Router>
    <Suspense fallback={(<div>loading</div>)}>
      <Switch>
        <Route path={ ROUTE_HOME } exact component={ Home } />
        <Route path={ ROUTE_JOKE } exact component={ Joke } />
        <Route path="*" component={ Home }
        />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
