import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Navbar from './app/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './app/Footer';

const App = () => (
  <Router>
    <div className="app-container">
      <Navbar />
      <div className="main-content container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beginner" element={<div>初心者のページ</div>} />
          <Route path="/intermediate" element={<div>中級のページ</div>} />
          <Route path="/advanced" element={<div>上級のページ</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
