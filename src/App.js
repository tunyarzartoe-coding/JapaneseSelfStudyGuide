import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Navbar from './app/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => (
  <Router>
    <Navbar />
    <div className="main-content">
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/beginner" component={() => <div>初心者のページ</div>} />
        <Route path="/intermediate" component={() => <div>中級のページ</div>} />
        <Route path="/advanced" component={() => <div>上級のページ</div>} />
        {/* <Route path="/profile" component={Profile} /> */}
        </Routes>
    </div>
  </Router>
);

export default App;
