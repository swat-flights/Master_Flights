package db

import (
	"log"
)

func Migrate() {
	dbMf, openErr := Connect()
	if openErr != nil {
		log.Fatalf("Error while opening the connection, Reason: %v\n", openErr)
		return
	}
	CreateFlightTable(dbMf)
	closeErr := dbMf.Close()
	if closeErr != nil {
		log.Fatalf("Error while closing the connection, Reason: %v\n", closeErr)
		return
	}
	log.Printf("Connection closed succesfully.\n")
}
