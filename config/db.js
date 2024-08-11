// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use the MONGO_URI from the environment variables
    await mongoose.connect('mongodb+srv://parthibanaakash:5RoHizCmrSiudZsQ@cluster0.ozwfygp.mongodb.net/', {
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
