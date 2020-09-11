package routers

import (
	"Master-Flights/db"
	"Master-Flights/models"
	"encoding/json"
	"log"
	"net/http"
)

func ListFlights(w http.ResponseWriter, r *http.Request)  {
	w.Header().Set("Content-Type", "application/json")
	conn, openErr := db.Connect()
	if openErr != nil {
		log.Fatalf("Error while opening the connection, Reason: %v\n", openErr)
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(openErr)
	}
	defer conn.Close()
	result, resultErr := db.List(conn)
	if resultErr != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(resultErr)
	}
	w.WriteHeader(http.StatusOK)
	resultJson := map[string][]models.Flights{
		"result": result,
	}
	json.NewEncoder(w).Encode(resultJson)
}
