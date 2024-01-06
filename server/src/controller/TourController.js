const Tour = require('../models/TourModel');

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
  
  const getTourById = async (tourId) => {
    try {
      const tour = await Tour.findById(tourId);
      return tour;
    } catch (err) {
      throw new Error(err.message);
    }
  };

module.exports = {
    createTour,
    updateTour,
    deleteTour,
    getTourById
}