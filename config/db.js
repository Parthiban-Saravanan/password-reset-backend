const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Using the MONGO_URI from the environment variables
    await mongoose.connect('mongodb://localhost:27017/password-reset', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
