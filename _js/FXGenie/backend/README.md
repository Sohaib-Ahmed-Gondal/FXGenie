# FXGenie Backend Documentation

## Overview
FXGenie is a full-stack Forex application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This backend documentation provides an overview of the backend structure, setup instructions, and usage guidelines.

## Project Structure
The backend of FXGenie is organized as follows:

```
backend
├── config          # Configuration files (e.g., database connection)
├── middlewares     # Middleware functions (e.g., authentication)
├── models          # Database models (e.g., User model)
├── routes          # API route definitions (e.g., Forex routes)
├── services        # Business logic and service functions
├── utils           # Utility functions (e.g., error handling)
├── server.js       # Entry point for the backend application
└── package.json    # Backend dependencies and scripts
```

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB Atlas account
- API keys for Forex rates, Stripe, PayPal, etc.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/FXGenie.git
   cd FXGenie/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and add the following environment variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   FOREX_API_KEY=your_forex_api_key
   STRIPE_API_KEY=your_stripe_api_key
   PAYPAL_API_KEY=your_paypal_api_key
   ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

### API Endpoints
The backend provides several API endpoints for interacting with Forex data. Refer to the `forexRoutes.js` file for detailed route definitions.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.