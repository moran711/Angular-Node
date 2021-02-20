const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  credential: String,
});

export default mongoose.model('User', userSchema);
