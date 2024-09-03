import React from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import './styles/app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/categories/home';
import Wine from './components/categories/wine';
import Planning from './components/categories/planning';
import Contact from './components/categories/contact';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <RouterRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/contact-us" element={<Contact />} />
        </RouterRoutes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
