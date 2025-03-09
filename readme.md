# Backend Project

## Overview

This is the backend of my project, built using modern web technologies to provide a secure and efficient API for task management. The backend handles user authentication, task management, and data validation.

## Live Links

- **Backend GitHub Repository**: [[Pstman Collection Link]([https://github.com/AbdulWahabRaza123/task_management](https://www.postman.com/dark-station-612385/workspace/api-dev/collection/26175871-1f305aef-3cf1-4983-ae35-41bb26a5474b?action=share&creator=26175871))]
- **Postman Collection Link**: [[Backend Repo Link](https://github.com/AbdulWahabRaza123/task_management)]
- **Deployed Backend URL**: [[Backend Production Link](https://task-manage-two-silk.vercel.app/)]
- **Demo Video**: [[Demo Video Link](https://drive.google.com/file/d/1NRs4XL_mPYduFth4O9JXL4yMZ6xJQDzW/view?usp=sharing)]
- **Deployed Frontend**: [[Frontend Production Link](https://task-manage-frontend-dl95.vercel.app/)]

## Technologies Used

This backend is built with the following technologies:

- **Express.js**: Minimalist web framework for Node.js.
- **Express Validator**: Middleware for validating user input.
- **MongoDB**: NoSQL database for scalable data storage.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **JSON Web Token (JWT)**: Authentication and authorization mechanism.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS version recommended)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone [Insert Backend Repo Link Here]
   ```
2. Navigate to the project folder:
   ```sh
   cd backend
   ```
3. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

### Running the Project

To start the backend server, run:

```sh
npm run dev  # or yarn dev
```

The API will be available at `http://localhost:8000/` (or your configured port).

## Features

- **User Management**: Signup, login, and authentication using JWT.
- **Task Management**: CRUD operations for tasks.
- **Data Validation**: Input validation using Express Validator.
- **Secure Authentication**: JWT-based authentication and protected routes.
- **MongoDB Integration**: Scalable and efficient database management.


## Contact

For any questions or issues, feel free to reach out!

---

**Happy Coding!**

