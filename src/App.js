import React from 'react';
import './App.css';
import { Route, Switch, withRouter  } from 'react-router-dom';
import Nav from './components/Nav';
import Masthead from './components/Masthead';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Masthead} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
