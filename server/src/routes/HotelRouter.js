const express = require('express');
const router = express.Router();

const hotelController = require('../controller/HotelController');
const {authMiddleware, authUserMiddleware} = require('../middleware/auth')


router.post('/create-hotels', authMiddleware, hotelController.createHotel);
router.put('/update-hotels/:id',authMiddleware, hotelController.updateHotel); 
router.delete('/delete-hotels/:id',authMiddleware, hotelController.deleteHotel);
router.get('/get-hotels/:id',authMiddleware, hotelController.getHotel);
router.get('/get-all-hotels',authMiddleware, hotelController.getAllHotels);

router.post('/:hotelId/book', hotelController.bookRoom);


module.exports = router;