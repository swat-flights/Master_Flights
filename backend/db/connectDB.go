package db

import (
	"errors"
	"github.com/go-pg/pg/v9"
	"github.com/joho/godotenv"
	"log"
	"os"
)

func Connect() (*pg.DB, error) {
	DB := GoDotEnvVariable("POSTGRES_DB")
	USER := GoDotEnvVariable("POSTGRES_USER")
	PASS := GoDotEnvVariable("POSTGRES_PASSWORD")
	opts := &pg.Options{
		User: USER,
		Password: PASS,
		Database: DB,
	}
	var db *pg.DB = pg.Connect(opts)
	if db == nil {
		log.Fatalf("Failed to connect to database.\n")
		return nil, errors.New("db: Failed to connect to database")
	}
	log.Printf("Connection to database successful.\n")
	return db, nil
}

func CheckupConnection() error {
	db, openErr := Connect()
	if openErr != nil {
		log.Fatalf("Error while opening the connection, Reason: %v\n", openErr)
		return openErr
	}
	defer db.Close()
	return nil
}

func GoDotEnvVariable(key string) string {
	err := godotenv.Load(".envs/.local/.env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}
	return os.Getenv(key)
}