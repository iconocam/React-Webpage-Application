import React from 'react'
import Navbar from './components/Navbar';
import navProps from './components/navProps';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <Router>
    <div>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
      
    </Routes>
    </div>
    </Router>
  )
}
// The Switch component renders the first Route that matches the location
export default App
