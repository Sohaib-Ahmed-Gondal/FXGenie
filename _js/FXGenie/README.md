# FXGenie

FXGenie is a full-stack Forex application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to view and manage Forex rates, providing a responsive interface for both web and mobile devices.

## Project Structure

The project is organized into the following main directories:

- **frontend**: Contains the React.js application.
  - **public**: Static assets such as images and the main HTML file.
  - **src**: Source code for the React application, including components, pages, services, and utilities.
  
- **backend**: Contains the Node.js and Express.js server.
  - **config**: Configuration files, including database connection settings.
  - **middlewares**: Middleware functions for authentication and error handling.
  - **models**: Mongoose models for MongoDB.
  - **routes**: API routes for handling requests.
  - **services**: Business logic and service functions.
  - **utils**: Utility functions for various purposes.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account for cloud database.
- API keys for Forex rates, Stripe, PayPal, etc.

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FOREX_API_KEY=your_forex_api_key
STRIPE_API_KEY=your_stripe_api_key
PAYPAL_API_KEY=your_paypal_api_key
```

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/FXGenie.git
   cd FXGenie
   ```

2. Install backend dependencies:

   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:

   ```
   cd backend
   npm start
   ```

2. Start the frontend application:

   ```
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Usage Guidelines

- Users can view live Forex rates and perform transactions.
- The application is designed to be responsive and user-friendly.
- Ensure to keep your API keys and sensitive information secure.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.