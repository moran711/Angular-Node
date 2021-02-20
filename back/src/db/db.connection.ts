const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('🚀 MongoDB Connected...');
  } catch (err) {
    console.error(err);
  }
};

export {connectDB};
