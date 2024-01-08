const express = require('express');
const router = express.Router();

const tourController = require('../controller/TourController');
const {authMiddleware, authUserMiddleware} = require('../middleware/auth')


router.post('/create-tours', authMiddleware, tourController.createTour);
router.put('/update-tours/:id',authMiddleware, tourController.updateTour); 
router.delete('/delete-tours/:id',authMiddleware, tourController.deleteTour);
router.get('/get-tours/:id',authMiddleware, tourController.getTour);
router.get('/get-all-tours',authMiddleware, tourController.getAllTours);

router.post('/tours/book', tourController.bookTour);


module.exports = router;