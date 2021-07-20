import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from './home';
import { Result } from './result_page';

const Root = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
        <Route exact path='/'> <Home /></Route>
        <Route exact path='/result' component={Result}></Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default Root;
