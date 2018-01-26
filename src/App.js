import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Routes from './Routes/routes';
// import Home from './Components/Categories/home';


class App extends Component {
  render() {
    return (
      <div className="app">
      <BrowserRouter>
      <div className="app">
      
        <Header />
        <div className="ok"></div>
        { Routes }
        <Footer />
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
