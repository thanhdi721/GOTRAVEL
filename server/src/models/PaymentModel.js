const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  // Các trường thông tin khác về thanh toán
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;