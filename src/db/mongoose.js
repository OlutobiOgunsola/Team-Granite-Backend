import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

const connectToDatabase = () => {
    mongoose.connect(process.env.ATLAS_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    console.log('Database connected successfully');

    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
};

// mongodb://127.0.0.1:27017/Team-Granite-Dockerized-Users-Management-App-db,

export default connectToDatabase;