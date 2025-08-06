Blog App (React + Express + MongoDB)
A full-stack blog application built with React, Express, and MongoDB, supporting user authentication (JWT), blog post creation, and commenting.

🔧 Features
User registration and login with JWT authentication

Create, read, update, and delete blog posts

Add and remove comments on posts

Protected routes for authenticated actions

MongoDB integration with Mongoose

React frontend with dynamic routing

Axios for API calls

Express backend with modular routing

Frontend served from the same Node server in production

🗂️ Project Structure
bash
Copy
Edit
project-root/
├── client/                 # React frontend (Create React App)
│   └── build/              # Compiled static assets for production
├── controllers/            # Express route logic
├── models/                 # Mongoose schemas
├── routes/                 # Express API routes
├── middleware/             # JWT and error handling middleware
├── config/                 # Database connection
├── .env                    # Environment variables (not committed)
├── server.js               # Entry point
├── app.js                  # Express app configuration
└── README.md
🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd your-repo-name
2. Install dependencies
Backend:
bash
Copy
Edit
npm install
Frontend:
bash
Copy
Edit
cd client
npm install
3. Create .env in the root directory
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogdb
JWT_SECRET=your_jwt_secret_here
4. Start the app (Dev Mode)
bash
Copy
Edit
# From root
npm run dev
This uses concurrently to run both the backend and React frontend.

5. Build frontend for production
bash
Copy
Edit
cd client
npm run build
Express will now serve the React app automatically.

🔐 API Endpoints (Examples)
Method	Route	Auth?	Description
POST	/api/auth/register	❌	Register new user
POST	/api/auth/login	❌	Log in and receive token
GET	/api/posts	❌	Get all blog posts
POST	/api/posts	✅	Create a blog post
GET	/api/posts/:id	❌	Get a single post
POST	/api/comments	✅	Add comment to post

✅ Tech Stack
Frontend: React, Axios, React Router

Backend: Express.js, Node.js, MongoDB, Mongoose

Auth: JSON Web Tokens (JWT)

Deployment Ready: Serves React build from Express in production

📦 Scripts
In root:

bash
Copy
Edit
npm run dev        # Run both client and server in dev
npm run server     # Run server only
npm run client     # Run client only
In /client:

bash
Copy
Edit
npm start          # Start React dev server
npm run build      # Build React for production
📄 License
MIT — feel free to use and modify this project.

