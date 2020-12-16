package main

import (
	"Master-Flights/db"
	"Master-Flights/handlers"
)

func main()  {
	err := db.CheckupConnection()
	if err != nil {
		return
	}
	db.Migrate()
	handlers.Handlers()
}
