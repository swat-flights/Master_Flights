// import flight model
const Flight = require('../models/flight');

// GET all flights
const getAllFlights = (origin, destination, departure, arrival) => {
  return new Promise((resolve, reject) => {
    if(!origin || !destination) {
      return reject()
    }
    return Flight.find({
      origin: origin,
      destination: destination, 
      departure: { $gte: departure },
      arrival: { $lte: arrival }
    }, (error, data) => {
      error ? 
      reject(error)
      :resolve(data)
    })
  })
};

// POST flight
const newFlight = (req, res) => {
  // check if the flight already exists in db
  Flight.findOne({departure:req.body.departure}, (data) => {

      //if flight not in db, add it
      if ( data === null ) {
        // create a new flight object using the Flight model and req.body
        const newFlight = new Flight({
          departure: req.body.departure,
          departure_time: req.body.departure_time,
          arrival: req.body.arrival,
          arrival_time: req.body.arrival_time,
          flight_duration: req.body.flight_duration,
          flight_url: req.body.flight_url,
        })

        // save this object to database
        newFlight.save((err, data)=>{
          if (err) return res.json({Error: err});
          return res.json(data);
        })
      // if flight is in db, return a message to inform it exists
      } else {
        return res.json({message:"Flight already exists"});
      }
  })
};

module.exports = {
  newFlight,
  getAllFlights
};
