import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from './home';
import { Result } from './result_page';

const Root = () => {
  return (
    <div className='whole-page'>
      <header className='header'>All About Pups</header>
      <HashRouter>
        <Switch>
          <Route exact path='/'> <Home /></Route>
          <Route exact path='/result' component={ Result }></Route>
        </Switch>
      </HashRouter>
      <footer className='footer'>
        <a href="https://satomi-dean.com/">©Satomi Dean</a>
        <div>2021</div>
      </footer>
    </div>
  )
}

export default Root;
