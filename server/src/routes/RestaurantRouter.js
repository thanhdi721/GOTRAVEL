const express = require('express');
const router = express.Router();

const restaurantController = require('../controller/RestaurantController');
const {authMiddleware, authUserMiddleware} = require('../middleware/auth')


router.post('/create-tours', authMiddleware, restaurantController.createRestaurant);
router.put('/update-tours/:id',authMiddleware, restaurantController.updateRestaurant); 
router.delete('/delete-tours/:id',authMiddleware, restaurantController.deleteRestaurant);


module.exports = router;