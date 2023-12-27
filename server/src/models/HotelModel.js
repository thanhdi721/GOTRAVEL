const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  roomTypes: [String],
  amenities: [String],
  // Các trường thông tin khác về khách sạn
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
