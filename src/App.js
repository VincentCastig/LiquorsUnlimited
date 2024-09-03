import React from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import './styles/app.scss';
import Header from './hooks/header.js';
import Footer from './hooks/footer.js';
import Home from './hooks/components/home.js';
import Wine from './hooks/components/wine.js';
import Planning from './hooks/components/planning.js';
import Contact from './hooks/components/contact.js';

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
