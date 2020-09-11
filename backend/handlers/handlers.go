package handlers

import (
	"Master-Flights/db"
	"Master-Flights/routers"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"log"
	"net/http"
)

func Handlers()  {
	router := mux.NewRouter()

	router.HandleFunc("/v1/flight", routers.ListFlights).Methods("GET")

	PORT := db.GoDotEnvVariable("SERVER_PORT")
	if PORT == "" {
		PORT = "8080"
	}
	handler := cors.AllowAll().Handler(router)
	log.Fatal(http.ListenAndServe(":"+PORT, handler))
}