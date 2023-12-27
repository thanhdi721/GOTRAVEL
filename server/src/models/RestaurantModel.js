const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  menu: [{
    name: String,
    price: Number,
    // Các trường thông tin khác về menu
  }],
  // Các trường thông tin khác về nhà hàng
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
