import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <Router>
    <div>
    <Navbar />
    <Switch>
      <Route path ="/" exact component ={Home}></Route>
      <Route path ="/about" exact component ={About}></Route>
      <Route path ="/contact" exact component ={Contact}></Route>
      
    </Switch>
    </div>
    </Router>
  )
}
// The Switch component renders the first Route that matches the location
export default App
