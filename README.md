# Task Manager API

Welcome to the Task Manager API! This API provides CRUD (Create, Read, Update, Delete) functionality for managing tasks. Whether you're building a web or mobile application, this API can serve as the backend for handling task-related operations.

## Getting Started

To get started with the Task Manager API, follow these steps:

1. **Clone the Repository**: Clone or download the repository to your local machine.

2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install all necessary dependencies.

3. **Set Up Environment Variables**: Create a `.env` file in the root directory and configure the necessary environment variables. You can use the `.env.example` file as a template.

4. **Database Configuration**: Configure your MongoDB database connection settings in the `.env` file. Ensure that you have your MongoDB server up and running.

5. **Start the Server**: Run `npm start` to start the server. By default, the server runs on port 3000. You can modify the port by setting the `PORT` variable in the `.env` file.

6. **Test the API**: You can use tools like Postman or cURL to test the API endpoints. Refer to the API documentation below for details on available endpoints and their usage.

## API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Endpoints

#### Create a Task
- **URL**: `/tasks`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "name": "Task Name",
    "completed": false
  }
  ```
- **Response**: 
  - Status: 201 Created
  - Body:
    ```json
    {
      "success": true,
      "data": {
        "_id": "task_id",
        "name": "Task Name",
        "completed": false
      }
    }
    ```

#### Get All Tasks
- **URL**: `/tasks`
- **Method**: GET
- **Response**: 
  - Status: 200 OK
  - Body:
    ```json
    {
      "success": true,
      "data": [
        {
          "_id": "task_id",
          "name": "Task Name",
          "completed": false
        },
        ...
      ]
    }
    ```

#### Get a Single Task
- **URL**: `/tasks/:taskId`
- **Method**: GET
- **Response**: 
  - Status: 200 OK
  - Body:
    ```json
    {
      "success": true,
      "data": {
        "_id": "task_id",
        "name": "Task Name",
        "completed": false
      }
    }
    ```

#### Update a Task
- **URL**: `/tasks/:taskId`
- **Method**: PUT
- **Request Body**:
  ```json
  {
    "name": "Updated Task Name",
    "completed": true
  }
  ```
- **Response**: 
  - Status: 200 OK
  - Body:
    ```json
    {
      "success": true,
      "data": {
        "_id": "task_id",
        "name": "Updated Task Name",
        "completed": true
      }
    }
    ```

#### Delete a Task
- **URL**: `/tasks/:taskId`
- **Method**: DELETE
- **Response**: 
  - Status: 200 OK
  - Body:
    ```json
    {
      "success": true,
      "message": "Task deleted successfully"
    }
    ```

## Error Handling

The API handles various error scenarios and returns appropriate HTTP status codes and error messages. For detailed error responses, refer to the API documentation or check the responses when testing the endpoints.

## Conclusion

That's it! You're now ready to use the Task Manager API to manage your tasks effectively. If you have any questions or encounter any issues, feel free to reach out to the maintainers of this API. Happy task managing!
