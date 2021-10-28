import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from "@mui/material";

import './App.css'

import { Cap } from './Cap.jsx';
import { VideoFull } from './VideoFull.jsx'
import { About } from './About/About.jsx';

function App() {
  let cQuery0 = "Cibernarium";
  let cQuery, fSetQuery;

  const srcVideo = "https://www.youtube.com/embed/NT299zIk2JY";

  return (

    < Router >
      {cQuery0} | {cQuery}
      <div className='App'>
        {/* <Cap /> */}
      </div>
      <Switch>
        <Route path="/about"> <About /> </Route>
        <Route path="/video/:id/:title"> <VideoFull cTitolVideo="TITOL" /> </Route>
        <Route expath="/"> <Cap /> </Route>
      </Switch>
    </Router >
  );
}

export default App