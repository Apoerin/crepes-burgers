import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Router isn't working for some reason, and for now Menu gonna stay at Home page for gh-pages

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
    <Home/>
    <Menu/>
    <Footer />
    </>
  );
  /*<Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      </Switch>
    </Router>*/
}

export default App;