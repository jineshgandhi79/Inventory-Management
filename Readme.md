
# Inventory Management System (MERN)

This repository contains a full-stack Inventory Management System built with the MERN stack (MongoDB, Express, React, Node). The project is split into two main folders:

- `Backend/` — Express API and data models
- `Frontend/` — React (Vite) single-page application

## Table of contents

- [What it does](#what-it-does)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [API overview](#api-overview)
- [Deployment](#deployment)

## What it does

This app manages inventory items, their locations, company/brand metadata, product histories, user accounts and roles, and provides analytics dashboards. It includes:

- Product CRUD (create, read, update, delete)
- Product history and change tracking
- Locations management (warehouses/rooms)
- Company/brand management
- User management with roles and authentication
- Basic analytics endpoints and dashboard components in the frontend

The frontend is a React app (Vite) with screens for products, locations, brands, users and dashboard analytics. The backend is an Express server exposing RESTful endpoints with JWT-based authentication for protected routes.

## Tech stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB (assumed)
- Auth: JWT-based middleware

## Project structure

Top-level folders:

- `Backend/` — server source
	- `app.js` — app entry
	- `controllers/` — route handlers (product_controller.js, user_controllers.js)
	- `models/` — Mongoose models (product, user, locations, history, company)
	- `routes/` — Express routes (productRoutes, user_routes, locationRoutes, etc.)
	- `middlewares/` — auth middleware

- `Frontend/` — React app
	- `src/` — components and screens
	- `index.html`, `vite.config.js`, `package.json`

## Requirements

- Node.js (16+ recommended)
- npm or yarn
- MongoDB instance (local or hosted)

## Setup Instructions

### Clone the Repository

```bash
git clone <repo_url>
cd Inventory-Management-System-MERN-Stack
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend directory with the following configuration:
   ```env
   MONGODB_URI=<your_mongodb_connection_string>
   DB_NAME=<your_database_name>
   PORT=<port_number>
   SECRET_KEY=<your_jwt_secret_key>
   FRONTEND=<frontend_application_url>
   ```

4. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend Setup

1. Navigate to the frontend directory from the project root:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the Frontend directory:
   ```env
   VITE_SERVER=<backend_api_url>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application should now be running locally with the backend server on the specified port and the frontend development server on the default Vite port.

## API overview

The backend exposes RESTful routes collected in the `Backend/routes/` folder. Example base paths (your server may differ — check `Backend/routes/*.js` for exact paths):

- /api/products — product CRUD and queries
- /api/users — authentication, user management, roles
- /api/locations — CRUD for inventory locations
- /api/companies — company/brand CRUD
- /api/history — product history and audit trails
- /api/analytics — analytics endpoints used by dashboard

Authentication is required for protected endpoints and handled via JWT; check `Backend/middlewares/user_auth.js` and `Backend/controllers/user_controllers.js`.

## Deployment

The application is deployed and accessible at the following URLs:

- Frontend Application: [https://inventory-management-5ald8tlu8-jinesh-gandhis-projects.vercel.app](https://inventory-management-5ald8tlu8-jinesh-gandhis-projects.vercel.app)
- Backend API: [https://inventory-management-ng93.onrender.com](https://inventory-management-ng93.onrender.com)

Please note that the backend service is hosted on Render's free tier, which automatically spins down after 15 minutes of inactivity to conserve resources. As a result, the initial request may experience a brief delay while the server instance restarts.

To ensure optimal performance, you can verify the backend service status by accessing the API endpoint at [https://inventory-management-ng93.onrender.com](https://inventory-management-ng93.onrender.com). When the response indicates "everything works fine," the server is operational and ready to process requests.
