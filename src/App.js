import React from 'react';
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import './styles/app.scss';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/Categories/home';
import Wine from './Components/Categories/wine';
import Planning from './Components/Categories/planning';
import Contact from './Components/Categories/contact';

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
