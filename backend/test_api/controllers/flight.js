// import flight model
const Flight = require('../models/flight');
require('dotenv').config();
const { handleFlightData }= require('../utils/flightsHandlers/handleFlightData');

// GET all flights
const getAllFlights = () => {
  return new Promise((resolve, reject) => {
    return Flight.find({}, (error, data) => {
      return error ? 
      reject(error)
      :resolve(data)
    })
  })
}

//filter by query params
const filterFlights = async(queryParams) => {
  //----pagination----
  //define API route
  const API = `http://localhost:${process.env.PORT}/api/v1/flight`

  //define a initial page and a the limit of documents we will return
  const page = parseInt(queryParams.page) || 1
  const limit = 5

  // define a range of ducuments to return, from startIndex to endIndex
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  //define main object that we will return to client
  const results = {info: {}}

  //delete page property to avoid errors on querying
  delete queryParams.page

  //get total documents we have as a result of querying by parameters define in frontend
  const flightsFound = await Flight.find(queryParams).countDocuments().exec()

  //while endIndex is less than flightsFound we will return a next page, if not, no
  if (endIndex < flightsFound) {
    queryParams.departure_date? results.info.next= `${API}?departure=${queryParams.departure}&arrival=${queryParams.arrival}&departure_date=${queryParams.departure_date}&page=${page + 1}`
    :results.info.next= `${API}?departure=${queryParams.departure}&arrival=${queryParams.arrival}&page=${page + 1}`
    results.info.limit = limit
  }
  
  //while starIndex is bigger than 0 we will return a previus page, if not, no
  if (startIndex > 0) {
    queryParams.departure_date? results.info.prev = `${API}?departure=${queryParams.departure}&arrival=${queryParams.arrival}&departure_date=${queryParams.departure_date}&page=${page - 1}`
    :results.info.prev = `${API}?departure=${queryParams.departure}&arrival=${queryParams.arrival}&page=${page - 1}`
  }

  //also return total flights found and total pages
  results.info.flightsFound = flightsFound
  results.info.pages = Math.ceil(flightsFound / limit)

  //----execute query-----
  return new Promise((resolve, reject) => {
    return Flight.find(queryParams, (error, data) => {
      error ? 
      reject(error)
      :results.results = data
      resolve(results)
    }).limit(limit).skip(startIndex)
  })
};

const getOneFlight = (id) => {
  return new Promise((resolve, reject) => {
    return Flight.find({_id: id}, (error, data) => {
      return error ? 
      reject('[Controller Error]: ' + error)
      // flight document exist?
      :data.length === 0?
      reject('Non-existent Document ' + error)
      :resolve(data)
    })
  })
}

// POST flight
const newFlight = (flightData) => {
  return new Promise((resolve, reject) => {
    if(!flightData._id) {
      return reject('[Controller Error:] Missing a valid ID')
    }
    // check if the flight already exists in db
    Flight.findOne({_id:flightData._id}, (error, data) => {
      if (data) {
        return reject('This file currently exists. Edition is possible')
      }

      // handler to build all flight schema with data recived on request body
      const myFlight = handleFlightData(flightData)

      //if not, let's create it
      const newFlight = new Flight(myFlight)
      newFlight.save((error, data) => {
        return error?
        reject('[Error on controller]: ' + error)
        :resolve(data)
      })
    })
  })
};

// PATCH flight
const updateFlight = (id, newData) => {
  return new Promise((resolve, reject) => {
    if(newData._id) {
      return reject('Is not possible to update id value')
    }
    Flight.findOneAndUpdate({_id: id}, newData, {new: true} ,(error, updatedFlight) => {
      return error?
        reject('[Error on controller]: ' + error)
        :!updatedFlight?
        reject('Non-existent Document ' + error)
        :resolve(updatedFlight)
    })
  })
}

const removeFlight = (id) => {
  return new Promise((resolve, reject) => {
    if(!id) {
      return reject('Bad Request')
    }
    Flight.findOneAndDelete({_id: id}, (error, flightDeleted) => {
      return error?
        reject('[Error on controller]: ' + error)
        :!flightDeleted?
        reject('Non-existent Document ' + error)
        :resolve(flightDeleted)
    })
  })
}

module.exports = {
  getAllFlights,
  filterFlights,
  getOneFlight,
  newFlight,
  updateFlight,
  removeFlight,
};
