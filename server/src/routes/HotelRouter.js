const express = require('express');
const router = express.Router();

const hotelController = require('../controller/HotelController');
const {authMiddleware, authUserMiddleware} = require('../middleware/auth')


router.post('/create-tours', authMiddleware, hotelController.createHotel);
router.put('/update-tours/:id',authMiddleware, hotelController.updateHotel); 
router.delete('/delete-tours/:id',authMiddleware, hotelController.deleteHotel);


module.exports = router;