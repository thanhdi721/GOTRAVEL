const express = require('express');
const router = express.Router();

const tourController = require('../controller/TourController');
const {authMiddleware, authUserMiddleware} = require('../middleware/auth')


router.post('/create-tours', authMiddleware, tourController.createTour);
router.put('/update-tours/:id',authMiddleware, tourController.updateTour); 
router.delete('/delete-tours/:id',authMiddleware, tourController.deleteTour);


module.exports = router;