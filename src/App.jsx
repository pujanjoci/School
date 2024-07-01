import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import OnlineAdmission from './components/OnlineAdmission';
import Gallery from './components/Gallery';
import GlobalConnection from './components/GlobalConnection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router basename="/School">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/online-admission" element={<OnlineAdmission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/global-connection" element={<GlobalConnection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
