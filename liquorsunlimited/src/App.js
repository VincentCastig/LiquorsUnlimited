import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
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
        
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
