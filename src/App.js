import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import {browserHistory} from 'helpers';
import './App.scss';
import 'configs';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading,
});

const Page404 = Loadable({
  loader: () => import('./views/Page404'),
  loading,
});

const Page500 = Loadable({
  loader: () => import('./views/Page500'),
  loading,
});

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/404" name="Page 404" component={Page404}/>
        <Route exact path="/500" name="Page 500" component={Page500}/>
        <Route path="/" name="Home" component={DefaultLayout}/>
      </Switch>
    </Router>
  );
}

export default App;
