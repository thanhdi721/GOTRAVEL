const Hotel = require('../models/HotelModel');

const createHotel = async (req, res) => {
  try {
    const { name, images, address, info, roomCount } = req.body;

    const newHotel = await Hotel.create({
      name,
      images,
      address,
      info,
      roomCount
    });

    res.status(201).json({
      status: 'success',
      data: {
        hotel: newHotel
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

const deleteHotel = async (req, res) => {
  try {
    const hotelId = req.params.id;

    const deletedHotel = await Hotel.findByIdAndDelete(hotelId);

    if (!deletedHotel) {
      return res.status(404).json({
        status: 'error',
        message: 'Hotel not found'
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

const updateHotel = async (req, res) => {
  try {
    const hotelId = req.params.id;
    const updatedData = req.body;

    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, updatedData, {
      new: true,
      runValidators: true
    });

    if (!updatedHotel) {
      return res.status(404).json({
        status: 'error',
        message: 'Hotel not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        hotel: updatedHotel
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

const getHotel = async (req, res) => {
  try {
    const hotelId = req.params.id;

    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      return res.status(404).json({
        status: 'error',
        message: 'Hotel not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        hotel: hotel
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json({
      status: 'success',
      data: {
        hotels: hotels
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};

const bookRoom = async (req, res) => {
  try {
    const { hotelId } = req.params; // ID của khách sạn
    const { roomCount } = req.body; // Số lượng phòng cần đặt

    // Tìm thông tin khách sạn dựa trên ID
    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      return res.status(404).json({
        status: 'error',
        message: 'Hotel not found'
      });
    }

    // Kiểm tra số lượng phòng còn lại trong khách sạn
    if (hotel.roomCount < roomCount) {
      return res.status(400).json({
        status: 'error',
        message: 'Not enough rooms available'
      });
    }

    // Cập nhật số lượng phòng đã đặt và lưu vào cơ sở dữ liệu
    hotel.roomCount -= roomCount;
    await hotel.save();

    res.status(200).json({
      status: 'success',
      data: {
        message: 'Room booked successfully'
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
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotels,
    bookRoom
}