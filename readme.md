# Fitness App

## Getting Started

Follow these instructions to set up and run the fitness app on your local machine.

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd fitness-app
   ```

2. Install dependencies for the backend:

   ```sh
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```sh
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB**:
   Open a terminal and run the following command to start the MongoDB server:

   ```sh
   mongod
   ```

2. **Start Mongo Express**:
   Open a new terminal, navigate to the backend directory, and run the following command to start Mongo Express:

   ```sh
   cd backend
   npm run mongo-express
   ```

3. **Start the Backend Server**:
   Open another terminal, navigate to the backend directory, and run the following command to start the backend server:

   ```sh
   cd backend
   npm start
   ```

4. **Start the Frontend Server**:
   Open another terminal, navigate to the frontend directory, and run the following command to start the frontend server:
   ```sh
   cd frontend
   npm start
   ```

### Accessing the Application

- **Mongo Express**: Open your browser and go to `http://localhost:8081` to access Mongo Express.
- **Backend API**: The backend API will be running on `http://localhost:5000`.
- **Frontend**: Open your browser and go to `http://localhost:3000` to access the frontend of the fitness app.

### Notes

- Ensure that all terminals are running the respective commands to keep the application running smoothly.
- If you encounter any issues, check the terminal logs for error messages and troubleshoot accordingly.

Enjoy using the fitness app!
