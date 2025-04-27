# FXGenie Frontend

FXGenie is a full-stack Forex application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This README provides an overview of the frontend setup and usage.

## Project Structure

The frontend of FXGenie is organized as follows:

```
frontend/
├── public/               # Static assets (images, index.html)
├── src/                  # Source code for the React application
│   ├── components/       # Reusable React components
│   ├── pages/            # Main pages of the application
│   ├── services/         # API service calls
│   ├── utils/            # Utility functions
│   ├── App.js            # Main application component
│   └── index.js          # Entry point of the React application
├── package.json          # Frontend dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd FXGenie/frontend
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To start the development server, run:

```
npm start
```

This will launch the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application, run:

```
npm run build
```

This will generate a `build` directory containing the optimized production files.

## Usage

The FXGenie frontend allows users to view and interact with Forex rates. Users can navigate through different pages, access Forex data, and utilize various features provided by the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.