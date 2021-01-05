import React from "react";
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Address from "./components/Address";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import './App.css';
import './Responsive.css';

function App() {
  return (
      <>
      <Header/>
      <About/>
      <Gallery/>
      <Address/>
      <Menu/>
      <Footer/>
      </>
  );
}

export default App;
