📚 Book Collection
A simple Book Collection CRUD application built using React, Node.js, Express.js, and MongoDB. This project allows users to add, update, view, and delete books with a clean and responsive interface.

✨ Features
➕ Add a new book

✏️ Update an existing book

🗑️ Delete a book

📖 View all books

💾 Store book data in MongoDB

🔄 Real-time updates using Axios

🛠️ Tech Stack
1. Frontend
⚛️ React.js

📡 Axios

⚡ Vite

2. Backend
🟢 Node.js

🚂 Express.js

🍃 MongoDB

📦 Mongoose

📋 Book Fields
Field	Description
Title	Title of the book
Author	Author of the book
Content	Content/description
Year	Publication year
🔗 API Endpoints
Method	Endpoint	Description
POST	/api/books	Add a book
GET	/api/books	Get all books
PUT	/api/books/:id	Update a book
DELETE	/api/books/:id	Delete a book
📁 Project Structure
text
book
├── backend
│   ├── models
│   │   └── Book.js
│   ├── routes
│   │   └── bookRoutes.js
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    │   ├── components
    │   ├── App.jsx
    │   └── main.jsx
    ├── public
    └── package.json
🚀 How to Run
🔧 Backend Setup
bash
cd backend
npm install
node server.js
Backend runs on:

text
http://localhost:5000
🎨 Frontend Setup
Open another terminal:

bash
cd frontend
npm install
npm run dev
Then open the URL shown by Vite (usually http://localhost:5173).

⚙️ Environment Variables
Create a .env file inside the backend folder and add:

env
MONGO_URI=your_mongodb_connection_string
PORT=5000
📸 Screenshots
Add screenshots of your application here to make the README more attractive.

🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

👨‍💻 Author
Shailesh Kumar
🎓 CSE | Final Year
🌱 Open Source Contributor

⭐ Support
If you like this project, please give it a ⭐ on GitHub — it really helps!

📝 License
This project is licensed under the MIT License.
