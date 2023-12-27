const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  location: String,
  price: {
    type: Number,
    required: true
  },
  // Các trường thông tin khác về tour du lịch
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
