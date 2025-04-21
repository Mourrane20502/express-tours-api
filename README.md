# Express Tours API

A simple RESTful API built with Node.js, Express, and the MVC architecture to manage tour data. This project reads tour information from a static `tours.json` file and provides basic endpoints to interact with it.

---

## 🧱 Project Structure (MVC)

This project is structured following the **MVC pattern**:
### MVC Explained

- **Model (`models/tourModel.js`)**: Responsible for reading tour data from the `tours.json` file and providing access to it.
- **View**: Not used here as it's an API (no frontend rendering).
- **Controller (`controllers/tourController.js`)**: Handles the logic for API endpoints, calls the model to fetch or manipulate data, and returns responses.
- **Routes (`routes/tourRoutes.js`)**: Defines API endpoints and maps them to the correct controller functions.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/your-username/express-tours-api.git
cd express-tours-api
npm install

npm start
📁 Data File
Tour data is stored in data/tours.json. You can add/edit tours directly in this file for testing.

🧠 Learning Purpose
This app is built to demonstrate how to structure a Node.js + Express application using best practices like MVC and modular file organization.



