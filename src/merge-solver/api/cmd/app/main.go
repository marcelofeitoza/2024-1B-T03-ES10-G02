package main

import (
	"fmt"
	"log"

	"net/http"

	"github.com/joho/godotenv"

	handlers "api/handlers/openAI"
	internal "api/internal/openAI"
)

func main() {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	mux := http.NewServeMux()
	openAIClient := internal.NewOpenAI()
	handler := handlers.NewHandler(openAIClient)

	mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, world!")
	})
	mux.HandleFunc("POST /merge", handler.MergeHandler)

	fmt.Println("Server is running on port 8090")

	if err := http.ListenAndServe(":8090", mux); err != nil {
		fmt.Printf("Server error: %v\n", err)
	}
}
