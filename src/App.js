import React from 'react';
import './App.css';
import { Route, Switch, withRouter  } from 'react-router-dom';
import Nav from './components/Nav';
import Masthead from './components/Masthead';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectShow from './components/ProjectShow';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Masthead} />
        <Route exact path='/about' component={About} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/project-show' component={ProjectShow} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
