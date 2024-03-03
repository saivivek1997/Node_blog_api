# Node.js Project README

## Getting Started

To run the project locally, follow these steps:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory of the project with the following content:

   ```dotenv
   NODE_ENV=development
   MONGO_URL=mongodb+srv://saivivek:1234@cluster0.bqhwxxp.mongodb.net/Blog-API?retryWrites=true&w=majority&appName=Cluster0
   PORT=3000
   FRONTEND=http://127.0.0.1:5173


   ```

3. Run the project:
   ```bash
   npm run dev
   ```

This will start the server in development mode.

## Environment Variables

- `NODE_ENV`: Specifies the environment mode. In this case, it's set to `development`.
- `MONGO_URL`: MongoDB connection URL. Make sure to replace `saivivek`, `1234`, and other credentials with your actual MongoDB credentials.
- `PORT`: The port on which the server will run. Default is `3000`.
- `FRONTEND`: URL of the frontend application that will interact with this backend. Change `127.0.0.1:5173` to match your frontend's URL.

## Overview

This is a live server providing access to a Node.js-based Blog API (version 1.1).

## Accessing the API

You can access the API using the following endpoint:
[https://node-blog-api-v1-1.onrender.com/api/posts](https://node-blog-api-v1-1.onrender.com/api/posts)

## Scripts

- `npm run dev`: Starts the server in development mode.
