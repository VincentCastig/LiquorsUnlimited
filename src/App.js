import React from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import './styles/app.scss';
import Header from './john/header.js';
import Footer from './john/footer.js';
import Home from './john/joe/home.js';
import Wine from './john/joe/wine.js';
import Planning from './john/joe/planning.js';
import Contact from './john/joe/contact.js';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/contact" element={<Contact />} />
        </RouterRoutes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
