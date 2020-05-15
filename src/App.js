import React from 'react';
import './App.css';
import { Route, Switch, withRouter  } from 'react-router-dom';
import Nav from './components/Nav';
import Masthead from './components/Masthead';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Masthead} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
