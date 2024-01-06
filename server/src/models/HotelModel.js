const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  images: [{
    type: String,
  }],
  address: String,
  roomTypes: [String],
  amenities: [String],
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
