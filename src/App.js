import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from "@mui/material";

import './App.css'

import { Cap } from './Cap.jsx';
import { VideoDetail } from './VideoDetail.jsx'
import { About } from './About/About.jsx';

function App() {
  const srcVideo = "https://www.youtube.com/embed/NT299zIk2JY";

  return (
    <Router>
      <div className='App'>
        {/* <Cap /> */}
      </div>
      <Switch>
        <Route path="/about"> <About /> </Route>
        <Route path="/video/:urlVideo"> <VideoDetail /> </Route>
        <Route expath="/"> <Cap /> </Route>
      </Switch>
    </Router>
  );
}

export default App