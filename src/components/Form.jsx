import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); //swapped out useHistory as it has been replaced and code is functioning again

    const handleEmailChange =(e) =>{
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
};
    // Submit form on start up
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        setEmail('');
        setPassword('');
        // Send client to home page
        navigate('/home'); // Using navigate instead of history.push
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label>
                Email:
                <br />
                <input type="email" value= {email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
                Password:
                <br />
                <input type="password" value= {password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Login/Signup</button>
            <button type="submit">Guest</button>

        </form>
    );
};

export default Form;