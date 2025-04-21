const fs = require("fs");
const path = require("path");

const tours = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "tours.json"), "utf-8")
);

module.exports = tours;
