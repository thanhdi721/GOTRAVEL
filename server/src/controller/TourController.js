const Tour = require('../models/TourModel');
const User = require('../models/UserModel');

const createTour = async (req, res) => {
    try {
      const { name, info, description, images, price } = req.body;
  
      const newTour = await Tour.create({
        name,
        info,
        description,
        images,
        price
      });
  
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
  };

const updateTour = async (req, res) => {
    try {
        const tourId = req.params.id;
        const updatedData = req.body; 
        const updatedTour = await Tour.findByIdAndUpdate(tourId, updatedData, {
          new: true,
          runValidators: true
        });
    
        if (!updatedTour) {
          return res.status(404).json({
            status: 'error',
            message: 'Tour not found'
          });
        }
    
        res.status(200).json({
          status: 'success',
          data: {
            tour: updatedTour
          }
        });
      } catch (err) {
        res.status(400).json({
          status: 'error',
          message: err.message
        });
      }
};


const deleteTour = async (req, res) => {
    try {
      const tourId = req.params.id;
      const deletedTour = await Tour.findByIdAndDelete(tourId);
  
      if (!deletedTour) {
        return res.status(404).json({
          status: 'error',
          message: 'Tour not found'
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

  const getTour = async (req, res) => {
    try {
      const tourId = req.params.id;
  
      const tour = await Tour.findById(tourId);
  
      if (!tour) {
        return res.status(404).json({
          status: 'error',
          message: 'Tour not found'
        });
      }
  
      res.status(200).json({
        status: 'success',
        data: {
          tour: tour
        }
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };
  
  const getAllTours = async (req, res) => {
    try {
      const tours = await Tour.find();
  
      res.status(200).json({
        status: 'success',
        data: {
          tours: tours
        }
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message
      });
    }
  };

  const bookTour = async (req, res) => {
    try {
      const { tourId, userId, numberOfTickets } = req.body;
  
      // Tìm tour cần đặt
      const tourToBook = await Tour.findById(tourId);
  
      if (!tourToBook) {
        return res.status(404).json({
          status: 'error',
          message: 'Tour not found'
        });
      }
  
      // Tìm thông tin người dùng
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({
          status: 'error',
          message: 'User not found'
        });
      }
  
      // Thực hiện việc đặt tour
      // Ví dụ: cập nhật thông tin đặt tour và thông tin người dùng
      const bookingInfo = {
        tourId: tourToBook._id,
        userId: user._id,
        numberOfTickets: numberOfTickets
        // Thông tin khác có thể cần thiết
      };
  
      // Lưu thông tin đặt tour vào cơ sở dữ liệu
      // Ví dụ: user.bookedTours.push(bookingInfo);
  
      // Lưu các thay đổi vào cơ sở dữ liệu
      await user.save();
  
      res.status(200).json({
        status: 'success',
        data: {
          message: 'Tour booked successfully',
          bookingInfo: bookingInfo
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
    createTour,
    updateTour,
    deleteTour,
    getTour,
    getAllTours,
    bookTour
}