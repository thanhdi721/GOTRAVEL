const UserRouter = require('./UserRouter');
const TourRouter = require('./TourRouter');
const HotelRouter = require('./HotelRouter');
const RestaurantRouter = require('./RestaurantRouter');



const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/tour', TourRouter)
    app.use('/api/hotel', HotelRouter)
    app.use('/api/restaurant', RestaurantRouter)

}

module.exports = routes