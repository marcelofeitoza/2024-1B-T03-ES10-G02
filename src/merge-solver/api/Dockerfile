
FROM golang:1.22.2

LABEL maintainer="Deploy Buddy - Merge Solver API"

WORKDIR /app
COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o main ./cmd/app/main.go

EXPOSE 8090
