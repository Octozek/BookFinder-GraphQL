# BookFinder-GraphQL

## Overview
BookFinder-GraphQL is a MERN stack application that allows users to search for books using the Google Books API, save books to their account, and view their saved books. The application has been refactored to use Graph: The complete guide for getting started.
Graph:

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Features
- **User Authentication**: Users can sign up, log in, and log out.
- **Book Search**: Search for books using the Google Books API.
- **Save Books**: Save books to your account.
- **View Saved Books**: View and manage saved books in your account.


## Installation
To set up the project locally, follow these steps:

### Clone the Repository
```bash
git clone https://github.com/Octozek/BookFinder-Graph: 
cd BookFinder-GraphQL
```

## Install Dependencies

### Install root dependencies
```bash
npm install
```

### Install client dependencies
```bash
cd client
npm install
```

### Install server dependencies
```bash
cd ../server
npm install
```

## Set Up Environment Variables

### Create a .env file in the root directory with the following content:

MONGODB_URI=mongodb+srv://octozek:Octopus27@cluster0.ljg37cm.mongodb.net/bookfinder?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=mysecretsshhhhh

## Start the Application

### Start the Backend Server

```bash
npm run start
```

### Start the Frontend Server

```bash
cd client
npm run serve
```
## Usage

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
2. The home page provides a search bar where you can search for books using the Google Books API.
3. To save books, you need to log in or sign up. Click on the "Login" button and use the details:
   - Username: TestUser
   - Password account
   - password: TestPassword

## Technologies Used
- Frontend: React, Bootstrap, Apollo Client
- Backend: Node.js, Express, Apollo Server, Graph
- Database: MongoDB
- Auth: JSON

## Application Link
Access the live application here: [BookFinder GraphQL Frontend](https://bookfinder-graphql-frontend.onrender.com/)

## Application Screenshot
![BookFinder Application Screenshot](./client/assets/Screenshot%20(512).png)

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## Contact
If you have any questions, feel free to contact me:

Email: octozek@gmail.com
GitHub: Octozek