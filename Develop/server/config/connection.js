const mongoose = require('mongoose');

// Use the environment variable MONGO_URI or fallback to localhost MongoDB if not provided
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/googlebooks';

mongoose.connect(mongoURI, {
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
