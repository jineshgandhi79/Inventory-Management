
# Inventory Management System (MERN)

This repository contains a full-stack Inventory Management System built with the MERN stack (MongoDB, Express, React, Node). The project is split into two main folders:

- `Backend/` — Express API and data models
- `Frontend/` — React (Vite) single-page application

## Table of contents

- [What it does](#what-it-does)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Requirements](#requirements)
- [API overview](#api-overview)

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

## API overview

The backend exposes RESTful routes collected in the `Backend/routes/` folder. Example base paths (your server may differ — check `Backend/routes/*.js` for exact paths):

- /api/products — product CRUD and queries
- /api/users — authentication, user management, roles
- /api/locations — CRUD for inventory locations
- /api/companies — company/brand CRUD
- /api/history — product history and audit trails
- /api/analytics — analytics endpoints used by dashboard

Authentication is required for protected endpoints and handled via JWT; check `Backend/middlewares/user_auth.js` and `Backend/controllers/user_controllers.js`.
