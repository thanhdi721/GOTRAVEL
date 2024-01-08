const express = require('express');
const router = express.Router();
const reviewController = require('../controller/ReviewController');

// Thêm review mới
router.post('/', reviewController.addReview);

// Lấy danh sách reviews theo entity ID
router.get('/:entityId', reviewController.getReviewsByEntity);

module.exports = router;
