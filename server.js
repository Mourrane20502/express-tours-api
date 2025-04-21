const express = require("express");
const dotenv = require("dotenv");
const tourRoutes = require("./routes/tourRoutes");
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/api/v1/tours", tourRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
