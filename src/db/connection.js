require ('dotenv').config();
const mongoose = require ('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection Successful");
    } catch (error) {
        console.log(error)      
    }
};

connect();