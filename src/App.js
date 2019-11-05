import React from 'react';
import Home from './container/Home/home';
import About from './container/About/about';
import Contact from './container/Contact/contact';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
