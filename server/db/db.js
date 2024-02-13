const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://iconocam0713:dkBZHwp9NGnjhJh3@cluster01.jfj1uyy.mongodb.net/Apatheia';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function connectToDatabase() {
    try {
    await client.connect();

    console.log('Connected to MongoDB');

    return client.db(); // Return database obj

    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err;

    }

};



export default connectToDatabase