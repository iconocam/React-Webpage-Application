import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Community from './components/Community';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import Mainpage from './components/Mainpage';
import Register from './components/Register';
import MongoData from './components/pokemonPeople';

// http://localhost:5173/api/pokemonPeople won't return data
// Register is not applicable to anything still

function App() {


  return (
    <Router>
    <div className="app-container">
    <Navbar />
    <Routes>
    <Route path="/" element={<Mainpage />} />
    <Route path="/home" element={<Home />} /> 
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/community" element={<Community />} />
    <Route path="/register" element={<Register />} />
    <Route path="/api/pokemonPeople" element={<MongoData />} />
    </Routes>
    <Footer />
    </div>
    </Router>
  )
}
// The Switch component renders the first Route that matches the location
export default App
