const Review = require('../models/ReviewModel');

// Thêm review mới
const addReview = async (req, res) => {
  try {
    const { userId, entityId, entityType, rating, comment } = req.body;
    const newReview = new Review({ userId, entityId, entityType, rating, comment });
    await newReview.save();

    res.status(201).json({
      status: 'success',
      data: {
        review: newReview
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

// Lấy danh sách reviews cho một entity cụ thể (ví dụ: Tour, Hotel, Restaurant)
const getReviewsByEntity = async (req, res) => {
  try {
    const entityId = req.params.entityId;
    const reviews = await Review.find({ entityId });
    
    res.status(200).json({
      status: 'success',
      data: {
        reviews
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

module.exports = {
  addReview,
  getReviewsByEntity
};
