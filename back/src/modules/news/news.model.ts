const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  text: String,
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('News', newsSchema);
