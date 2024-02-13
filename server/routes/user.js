import express from 'express';
import db from '../db/db'
// bcrypt is for password hashing
const bcrypt = require('bcrypt');
const connectToDB = require('../db/db');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    // Implement user registration logic
    const {email, password} = req.body;

    //Hash the password
    const hashedPassword= await bcrypt.hash(password,10);

    try {
        const db= await connectToDB();
        const usersCollection= db.collection('Passwords');

        await usersCollection.insertOne({
            email,
            password: hashedPassword
        });

        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({message:'Internal server error'});
    }
    
});

// Login route
router.post('/login', async (req, res) => {
    // Implement user login logic using MongoDB Native Driver
});

module.exports = router;