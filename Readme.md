

# Express.js Backend API

This is a backend API built using Node.js, Express.js, MongoDB, and Cloudinary. The API provides user authentication (signup and login) and book management features, with routes for managing user accounts and books.

## Features
- User authentication: signup and login using JWT.
- Book management: create and retrieve books.
- Cloudinary integration for media uploads.
- CORS enabled for handling cross-origin requests.
- Database connection using MongoDB.

## Getting Started

### Prerequisites
Make sure you have the following installed on your local development machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/)
- A Cloudinary account for image storage

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of your project and configure your environment variables:
   ```env
   MONGOO_URI=your_mongodb_connection_string
   PORT=3000
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   ```

### Running the Server
Start the server in development mode:
```bash
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

### User Routes
- **POST** `/api/v1/user/signup`: Register a new user
- **POST** `/api/v1/user/login`: Login with existing user credentials

### Book Routes
- **GET** `/api/v1/book`: Retrieve all books
- **POST** `/api/v1/book`: Create a new book

## Project Structure
```
/src
  ├── config
  │   └── Db.js             # Database connection
  ├── controllers
  │   ├── UserController.js # User signup and login logic
  │   └── BookController.js # Book retrieval and creation logic
  ├── Router
  │   ├── UserRoute.js      # User-related routes
  │   └── BookRoute.js      # Book-related routes
.env                        # Environment variables
server.js                   # Entry point for the server
```

## Database Configuration
The MongoDB connection is managed using `connectDB` from `src/config/Db.js`. Ensure your MongoDB URI is correctly set in the `.env` file.

## Cloudinary Configuration
Media uploads are handled using Cloudinary. Configure your Cloudinary account details in the `.env` file.

```javascript
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});
```

## CORS Configuration
CORS is enabled to allow requests from any origin:
```javascript
app.use(cors({ origin: "*", credentials: true }));
```

