# Node.js Express App Dockerized

This repository contains a Dockerized Node.js Express application.

## Getting Started

### Prerequisites
- Docker installed on your machine

### Build and Run


1. Clone this repository to your local machine:

git clone <repository-url>


2. Navigate to the cloned repository:

cd <repository-directory>


3. Build the Docker image:

docker build -t simpleweb or any name of your choice .


4. Run the Docker container or any port of your choice if you dont want to use 3000 for the host port:

docker container run -p 3000:8080 simpleweb


5. Access the application in your web browser at `http://localhost:3000`.

## Project Structure

- `Dockerfile`: Defines the Docker image configuration.
- `package.json`: Contains project dependencies and start script.
- `index.js`: Node.js Express application code.

## Dependencies

This project uses the following dependencies:
- Express.js: Web framework for Node.js.

## Scripts

- `start`: Runs the Node.js application.

## Author

Segun - DevOps/Linux Engineer


