#Project API - Champions League Node.js Express
This project is a Node.js API built with TypeScript and Express, designed to manage CRUD operations for soccer players. It was developed as part of a coding challenge for a DIO course.

Installation
Before running the API, make sure you have Node.js and npm (or yarn) installed on your machine. Then, follow these steps:

Clone the repository:

bash
Copy code
git clone <repository_url>
cd project-api-championsleague-nodejs-express
Install dependencies:

bash
Copy code
npm install
# or
yarn
Set up environment variables:

Create a .env file in the root directory and define necessary environment variables like database connection strings or API keys.

Usage
Development
To run the API in development mode with TypeScript watch mode:

bash
Copy code
npm run start:watch
# or
yarn start:watch
This will start the development server using tsx with TypeScript watch mode, which automatically restarts the server on file changes.

Production
To build and run the API in production mode:

bash
Copy code
npm run start:dist
# or
yarn start:dist
This script compiles TypeScript files into JavaScript using tsup and starts the server using the compiled output.

How to Use
API Endpoints:

GET /players: Retrieve all players.
GET /players/
: Retrieve a specific player by ID.
POST /players: Create a new player.
PUT /players/
: Update a player by ID.
DELETE /players/
: Delete a player by ID.
Example:

bash
Copy code
# Retrieve all players
curl http://localhost:3000/players

# Retrieve a specific player by ID
curl http://localhost:3000/players/1

# Create a new player
curl -X POST -H "Content-Type: application/json" -d '{"name": "Lionel Messi", "club": "Paris Saint-Germain", "nationality": "Argentina", "position": "forward"}' http://localhost:3000/players

# Update a player by ID
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Cristiano Ronaldo"}' http://localhost:3000/players/2

# Delete a player by ID
curl -X DELETE http://localhost:3000/players/1
Dependencies:

Express: Web framework for Node.js.
Cors: Middleware for enabling Cross-Origin Resource Sharing.
License
This project is licensed under the ISC License. See the LICENSE file for more details.
# Api_nodeJs_Express-projectChampions
# Api_nodeJs_Express-projectChampions
# Api_nodeJs_Express-projectChampionsLeague
