package db

import (
	"Master-Flights/models"
	"github.com/go-pg/pg/v9"
	"github.com/go-pg/pg/v9/orm"
	"log"
)

func CreateFlightTable(db *pg.DB) error {
	opts := &orm.CreateTableOptions{
		IfNotExists: true,
	}
	createErr := db.CreateTable(&models.Flights{}, opts)
	if createErr != nil {
		log.Fatalf("Error while creating table Flights, Reason: %v\n", createErr)
		return createErr
	}
	log.Printf("Table Flights created successfully.\n")
	return nil
}

func Save(db *pg.DB, f models.Flights) error {
	insertErr := db.Insert(f)
	if insertErr != nil {
		log.Fatalf("Error while inserting new Flight into DB, Reason: %v\n", insertErr)
		return insertErr
	}
	log.Printf("Flight %s inserted successfully.\n", f.FlightNumber)
	return nil
}

func List(db *pg.DB) ([]models.Flights, error) {
	var arrayOfFlights []models.Flights
	listErr := db.Model(&arrayOfFlights).Select()
	if listErr != nil {
		log.Fatalf("Error while list Flights into DB, Reason: %v\n", listErr)
		return arrayOfFlights, listErr
	}
	return arrayOfFlights, nil
}