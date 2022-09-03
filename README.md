## Local

To run the project locally, you need to reproduce the following steps

-- Create .env file in root folder and specify environments from .env.example file

-- run npm i

-- run npm run start:dev

## Production

To run the project on production mode, you need to reproduce the following steps

-- Create .env file in root folder and specify environments from .env.example file

-- Create docker image from root folder , ex.(`docker build -t my-super-app .`)

-- Run docker container ex.(`docker run -dp 3000:3000 my-super-app`)

## Instruction

How does the app work? You need to reproduce 4 steps

1. Send a post request along the route "/country" to add countries
1. Send a post request along the route "/place" to add places
1. Send a post request along the route "/info" to count information
1. Send a get request along the route "/info" to represent counted earlier information

You can use Postman or your browser for steps 1-4
