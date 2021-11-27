import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dash';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';




const App = () => {
  return (
    <Router>
      <div className="app">
    <Switch>
        {/* <Route path="/login" caseSensitive={false} element={<Login />} />
        <Route path="/register" caseSensitive={false} element={<Register />} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
    </Switch>
    </div>
  </Router>
  );
};

export default App;
