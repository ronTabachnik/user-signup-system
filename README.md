# Signup Application

This is a simple Node.js application for user registration. Users can submit their name, email, and a message through a form, and the data will be stored in a MongoDB database. Additionally, the application records the user's IP address and the exact time of registration.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration:** Allows users to submit their name, email, and a message through a form.
- **Data Storage:** Stores user data, including name, email, IP address, timestamp, and message, in a MongoDB database.
- **Timestamping:** Records the exact time of user registration.
- **IP Address Retrieval:** Captures the user's IP address from the request headers.

## Installation

To run this application locally, you need to have Node.js and MongoDB installed on your system.

1. Clone the repository:

    ```bash
    git clone https://github.com/ronTabachnik/user-signup-system.git
    cd signup-application
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

## Usage

1. Open your web browser and navigate to http://localhost:3000.
2. Fill out the signup form with your name, email, and a message.
3. Submit the form.
4. You will be redirected to a success page if the submission is successful.

## Endpoints

- **GET /users:** Retrieves all registered users' data from the database.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
