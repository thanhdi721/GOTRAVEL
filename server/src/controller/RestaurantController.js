const Restaurant = require('../models/RestaurantModel');

const createRestaurant = async (req, res) => {
  try {
    const { name, images, address, menu } = req.body;

    const newRestaurant = await Restaurant.create({
      name,
      images,
      address,
      menu
    });

    res.status(201).json({
      status: 'success',
      data: {
        restaurant: newRestaurant
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;

    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);

    if (!deletedRestaurant) {
      return res.status(404).json({
        status: 'error',
        message: 'Restaurant not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const updatedData = req.body;

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, updatedData, {
      new: true,
      runValidators: true
    });

    if (!updatedRestaurant) {
      return res.status(404).json({
        status: 'error',
        message: 'Restaurant not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        restaurant: updatedRestaurant
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};


module.exports = {
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
}