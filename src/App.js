import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";

import './App.css';
import './Responsive.css';

function App() {
  return (
      <>
      <Header />
      <Router>
        <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/menu" component={Menu} />
        </Switch>
      </Router>
      <Footer />
      </>
  );
}

export default App;
