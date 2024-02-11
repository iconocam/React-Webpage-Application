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


// Mainpage component to be the initial landing page
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
    <div className="app-container">
    <Navbar />
    <Routes>
    <Route path="/" element={<Mainpage />} />
    <Route path="/home" element={<Home />} /> {/* Use Home for other routes as needed */}
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/community" element={<Community />} />
      
    </Routes>
    <Footer />
    </div>
    </Router>
  )
}
// The Switch component renders the first Route that matches the location
export default App
