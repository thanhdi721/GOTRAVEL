const Order = require('../models/OrderModel');
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

const getRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;

    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({
        status: 'error',
        message: 'Restaurant not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        restaurant: restaurant
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.status(200).json({
      status: 'success',
      data: {
        restaurants: restaurants
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

const orderFood = async (req, res) => {
  try {
    const { restaurantId, foodName } = req.body; // ID của nhà hàng và tên món ăn cần đặt
  
    // Tìm thông tin nhà hàng dựa trên ID
    const restaurant = await Restaurant.findById(restaurantId);
  
    if (!restaurant) {
      return res.status(404).json({
        status: 'error',
        message: 'Restaurant not found'
      });
    }
  
    // Kiểm tra xem món ăn có tồn tại trong menu không
    const food = restaurant.menu.find(item => item.name === foodName);
  
    if (!food) {
      return res.status(400).json({
        status: 'error',
        message: 'Food not available in the menu'
      });
    }
  
    // Tạo một đối tượng Order mới
    const order = new Order({
      restaurantId: restaurant._id,
      foodName: foodName,
      price: food.price
    });
  
    // Lưu đơn đặt hàng vào cơ sở dữ liệu
    await order.save();
  
    res.status(200).json({
      status: 'success',
      data: {
        message: 'Food ordered successfully'
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
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    getRestaurant,
    getAllRestaurants,
    orderFood
}