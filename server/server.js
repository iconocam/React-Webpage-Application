const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user');
const connectToDB = require('./db/db');
import "dotenv/config"

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user', userRoutes);

// Connect to MongoDB before starting the server
connectToDB().then(() => {
    const PORT = process.env.PORT || 8000;











    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});