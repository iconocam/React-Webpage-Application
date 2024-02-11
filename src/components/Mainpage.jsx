import React from "react";
import Form from "./Form";
import './Mainpage.css'

// Main Start up page produces form
// Creating sections for main page
const Mainpage = () => {
    return (
        <div className="mainpage-container">
        <h1 className="mainpage-heading">Apatheia</h1>
        <div className="login-form">
        <Form />
        </div>
        <section>
            
        </section>
        </div>
        
    )
}

export default Mainpage;