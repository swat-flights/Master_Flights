package models

import "time"

type Flights struct {
	RefPointer int `sql:"-" json:"refPointer"`
	tableName struct{} `sql:"flights"`
	Id int `sql:"id, pk" json:"id"`
	Airline string `sql:"airline" json:"airline"`
	FlightNumber string `sql:"flight_number, unique" json:"flightNumber"`
	FlightTimeSecond int `sql:"flight_time_second" json:"flightTimeSecond"`
	ArrivalDate time.Time `sql:"arrival_date" json:"arrivalDate"`
	DepartureDate time.Time `sql:"departure_date" json:"departureDate"`
	From string `sql:"from" json:"from"`
	To string `sql:"to" json:"to"`
	Price float64 `sql:"price, type:real" json:"price"`
	CreatedAt time.Time `sql:"created_at" json:"createdAt"`
	UpdatedAt time.Time `sql:"updated_at" json:"updatedAt"`
	IsActive bool `sql:"is_active" json:"isActive"`
}
