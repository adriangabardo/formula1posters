import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './Home';
import Navigation from './NavBar';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path="/" component={Main} />
        <Route path="/top" component={Main} />
        <Route path="/hot" component={Main} />
        <Route path="/new" component={Main} />
        <Route path="/rising" component={Main} />
        <Route path="/random" component={Main} />
      </Router>
    </>
  );
}

export default App;
