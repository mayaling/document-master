import React from 'react';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '@container/Home/index.jsx';


const Root = ({ history }) => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
);

export default Root;
