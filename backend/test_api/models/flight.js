const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema(
  {
    _id: {type:String, required:true},

    departure: {type:String, required:true},
    departure_date: {type:String, required:true},
    departure_time: {type:String, required:true},
    departure_icao: {type: String, required: true},
    departure_city_name: {type: String, required: true},
    departure_airport_name: {type: String, required: true},
    departure_country: {type: String, required: true},

    arrival: {type:String, required:true},
    arrival_date: {type:String, required:true},
    arrival_time: {type:String, required:true},
    arrival_icao: {type: String, required: true},
    arrival_city_name: {type: String, required: true},
    arrival_airport_name: {type: String, required: true},
    arrival_country: {type: String, required: true},
    
    flight_duration: {type:String, required:true},
    airline_name: [{type: String, required:true}],
    price: {type: String, required: true},
    stops: String,
    // flight_url: String,

    stopovers: [
      {
      stopover_departure: {type:String},
      stopover_departure_time: String,
      stopover_arrival: {type:String },
      stopover_arrival_time: String,
      stopover_flight_duration: Number,
      stopover_flight_number: String,
      stopover_flight_airplane_model: String,
      stopover_airline_image: String,
      stopover_duration: Number
      }
    ],
    prices: [
      {
      category: {type:String},
      currency: String,
      price: Number
      }
    ]
  }
);

const Flight = mongoose.model('flights_v3', FlightSchema);

module.exports = Flight;

/*
EXAMPLE

{
  "_id": "2",

  "departure": "GDL",
  "departure_date": "2020-12-18",
  "departure_time": "06:20:00",
  "departure_icao": "MMGL",
  "departure_city_name": "Guadalajara",
  "departure_airport_name": "Miguel Hidalgo y Costilla",
  "departure_country": "México",

  "arrival": "BOG",
  "arrival_date": "Sin fecha prevista de llegada",
  "arrival_time": "Sin hora prevista de llegada",
  "arrival_icao": "SKBO",
  "arrival_city_name": "Bogotá",
  "arrival_airport_name": "El Dorado",
  "arrival_country": "Colombia",

  "flight_duration": "15 HR 36 min",
  "airline_name": [
      "Aeromexico",
      "LATAM"
  ],
  "price": "1500",
  "prices": [],
  "stopovers": [],

  flight_url: "an flight website url",

  stopovers: [
    {
    stopover_departure: "EZE",
    stopover_departure_time: "18:35",
    stopover_arrival: "GRU",
    stopover_arrival_time: "21:20",
    stopover_flight_duration: 165,
    stopover_flight_number: "LA8011",
    stopover_flight_airplane_model: "Airbus 320-200",
    stopover_airline_image: "an image file url",
    stopover_duration: 95,
    },
    {
    stopover_departure: "GRU",
    stopover_departure_time: "22:55",
    stopover_arrival: "MAD",
    stopover_arrival_time: "13:10+1",
    stopover_flight_duration: 615,
    stopover_flight_number: "LA8064",
    stopover_flight_airplane_model: "Boeing 777-300",
    stopover_airline_image: "an image file url",
    stopover_duration: 0,
    },
  ],
  prices: [
    {
    category: "LIGHT",
    currency: "US$",
    price: 551
    },
    {
    category: "PLUS",
    currency: "US$",
    price: 624
    },
    {
    category: "TOP",
    currency: "US$",
    price: 707
    },
  ]
}

*/
