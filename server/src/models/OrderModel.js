const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  foodName: String,
  price: Number
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
