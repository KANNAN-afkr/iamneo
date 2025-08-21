import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ApplyForm from './components/ApplyForm';
import DisplayGift from './components/DisplayGift';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><NavBar /><Home /><Footer /></>} />
          <Route path="/apply" element={<><NavBar /><ApplyForm /><Footer /></>} />
          <Route path="/getAllGifts" element={<><NavBar /><DisplayGift /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
