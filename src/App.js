import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './NavBar';

import Main from './Home'
import TopPage from './Pages/top'
import HotPage from './Pages/hot'
import NewPage from './Pages/new'
import RisingPage from './Pages/rising'
import RandomPage from './Pages/random'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path="/" component={Main} />
        <Route path="/top" component={TopPage} />
        <Route path="/hot" component={HotPage} />
        <Route path="/new" component={NewPage} />
        <Route path="/rising" component={RisingPage} />
        <Route path="/random" component={RandomPage} />
      </Router>
    </>
  );
}

export default App;
