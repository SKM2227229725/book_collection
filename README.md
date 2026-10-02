# Book Collection

A simple Book Collection CRUD application built using React, Node.js, Express.js and MongoDB.

## Features

* Add a book .
* View all books
* Update a book
* Delete a book
* Store book data in MongoDB

## Tech Stack

###  1. Frontend

* React.js
* Axios
* Vite

### 2. Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

##  3.Book Fields

* Title
* Author
* Content
* Year

## API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | `/api/books`     | Add a book    |
| GET    | `/api/books`     | Get all books |
| PUT    | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

## Project Structure

```text
book
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    ├── public
    └── package.json
```

## How to Run

### Backend

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the URL shown by Vite.

## Author

Shailesh Kumar
CSE| Final | year | Open source contributer
