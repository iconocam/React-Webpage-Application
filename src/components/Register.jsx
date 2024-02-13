import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // accessing prior history
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data.message);
                navigate('/login'); // Redirect to login page after successful registration
            } else {
                console.error('Error registering user:', data.message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form>
                <label>Email: </label>
                <input type="email" value={email} onChange={handleEmailChange} />
                <br />
                <label>Password: </label>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <br />
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;