## Backend - Traffic Analytics Dashboard
This is the backend service for the Traffic Analytics Dashboard built using **Node.js**, **Express**, and **MySQL**.
---
### Prerequisites
- Node.js
- MySQL
- Docker
---
### Project Setup
#### 1. Clone the repository
```bash
git clone https://github.com/your-username/derq-traffic-control-backend.git
cd derq-traffic-control-backend
```
#### 2. Install dependencies
```bash
npm install
```
---
### Environment Setup
Create a `.env` file in the root of the project:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=traffic_db
```
---
### Run Locally
```bash
npm run dev
```
---
### Run Tests
```bash
npm run test
```
---
### Docker Setup
#### 1. Build Docker Image
```bash
docker build -t derq-traffic-control-backend .
```
#### 2. Run Docker Container
```bash
docker run -p 5000:5000 --env-file .env derq-traffic-control-backend
```
---
### Features
- RESTful API for traffic data
- MySQL database integration
- Docker-ready
---

React

