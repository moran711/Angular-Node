const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  text: String,
});

export default mongoose.model('News', newsSchema);
