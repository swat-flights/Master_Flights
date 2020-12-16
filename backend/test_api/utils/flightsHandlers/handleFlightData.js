/* Este Handler gestiona datos faltantes en la creación de vuelos y
añade información adicional al body recibido, a partir de la ciudad que 
el cliente define en la creación de vuelos. 
De esta forma los formularios de creación de vuelos son más comprimidos */
exports.handleFlightData = function(flightData) {

  //Definir la información extra de cada aeropuerto
  let extraInfo = {
//'departure': ["icao", "city", "airport_name", "country"]
    'MEX': ["MMX", "Ciudad de México", "Benito Juárez", "Mexico"],
    'BOG': ["SKBO", "Bogotá", "El Dorado", "Colombia"],
    'GDL': ['MMGL', "Guadalajara", "Miguel Hidalgo y Costilla", "México"],
    'MDE': ['SKRG', "Medellín", "José María Córdova", "Colombia"],
    'MTY': ['MMMY', "Monterrey", "General Mariano Escobedo", "México"],
    'CLO': ['SKCL', "Cali", "Alfonso Bonilla Aragón", "Colombia"]
  }

  //Añadir información de la salida del vuelo
  flightData.departure_icao = extraInfo[flightData.departure][0]
  flightData.departure_city_name = extraInfo[flightData.departure][1]
  flightData.departure_airport_name = extraInfo[flightData.departure][2]
  flightData.departure_country = extraInfo[flightData.departure][3]

  //Añadir información de la llegada del vuelo
  flightData.arrival_icao = extraInfo[flightData.arrival][0]
  flightData.arrival_city_name = extraInfo[flightData.arrival][1]
  flightData.arrival_airport_name = extraInfo[flightData.arrival][2]
  flightData.arrival_country = extraInfo[flightData.arrival][3]

  //set price to string
  flightData.price = flightData.price.toString()

  // manage data missed on body
  if(!flightData.prices) {
    flightData.prices = []
  }

  if(!flightData.stopovers) {
    flightData.stopovers = []
  }

  if(!flightData.arrival_date) {
    flightData.arrival_date = "Sin fecha prevista de llegada"
  }

  if(!flightData.arrival_time) {
    flightData.arrival_time = "Sin hora prevista de llegada"
  }

  return flightData
}
