const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Tham chiếu tới mô hình User
    required: true
  },
  entityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  entityType: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: String,
  
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
