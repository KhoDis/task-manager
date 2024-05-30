# Task Management Application

This project is a Task Management Application with a backend built using Node.js, Express, and MongoDB, and a frontend built using Next.js, React, and Redux Toolkit with RTK Query. It demonstrates user authentication, CRUD operations for tasks, and state management.

## Features

- User authentication (signup and login) with JWT
- Create, read, update, and delete tasks
- State management with Redux Toolkit and RTK Query
- Secure backend with protected routes
- Responsive frontend built with Next.js and React

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Redux Toolkit
- RTK Query
- Tailwind CSS (for styling)

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT) for authentication
- bcrypt for password hashing
- dotenv for environment variables

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

## Setup

### Clone the repository

```bash
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
```

### Environment Variables

Create a `.env` file in the root of the backend and frontend directories with the following variables:

#### Backend (`backend/.env`)

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### Frontend (`frontend/.env.local`)

```
API_URL=http://localhost:4000/api
```

### Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

## Running the Application

### Backend

Start the backend server:

```bash
cd backend
npm run dev
```

The backend server will run on `http://localhost:4000`.

### Frontend

Start the frontend development server:

```bash
cd frontend
npm run dev
```

The frontend server will run on `http://localhost:3000`.

## API Endpoints

### Auth

- **POST** `/api/auth/signup` - Sign up a new user
- **POST** `/api/auth/login` - Log in an existing user

### Tasks

- **GET** `/api/tasks` - Get all tasks (protected route)
- **POST** `/api/tasks` - Create a new task (protected route)
- **PUT** `/api/tasks/:id` - Update a task (protected route)
- **DELETE** `/api/tasks/:id` - Delete a task (protected route)

## Frontend Components

- **Login Page** - `pages/auth/login.tsx`
- **Signup Page** - `pages/auth/signup.tsx`
- **Tasks Page** - `pages/tasks/index.tsx`
- **Create/Edit Task Form** - `components/TaskForm.tsx`
- **Task List** - `components/TaskList.tsx`
- **Task Item** - `components/TaskItem.tsx`

## Redux Toolkit

The Redux store and RTK Query API slices are located in `services/api.ts`.

### RTK Query Endpoints

- `useLoginMutation`
- `useSignupMutation`
- `useTasksQuery`
- `useCreateTaskMutation`
- `useUpdateTaskMutation`
- `useDeleteTaskMutation`

## Additional Information

### Security

- Passwords are hashed using `bcrypt` before being stored in the database.
- JWT is used for securing routes and ensuring that only authenticated users can access certain endpoints.

## Contributing

Feel free to open issues or submit pull requests if you have any suggestions for improvements or bug fixes.

## License

This project is licensed under the MIT License.
