import { MongoClient } from "mongodb";

const uri = 'mongodb+srv://iconocam0713:dkBZHwp9NGnjhJh3@cluster01.jfj1uyy.mongodb.net/Apatheia';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function connectToDB() {
    try {
    await client.connect();

    console.log('Connected to MongoDB');

    return client.db(); // Return database obj

    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err;

    }

};



export default connectToDB