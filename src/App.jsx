import React  from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import './Responsive.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/menu">
          <Menu/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}
