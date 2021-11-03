import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'

import { Cap } from './Cap.jsx';
import { About } from './About/About.jsx';

function App() {
  return (
    < Router >
      <Switch>
        <Route path="/about"> <About /> </Route>
        <Route expath="/"> <Cap /> </Route>
      </Switch>
    </Router >
  );
}

export default App