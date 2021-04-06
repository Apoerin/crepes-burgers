import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import './Responsive.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route exact path="/:location?">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
