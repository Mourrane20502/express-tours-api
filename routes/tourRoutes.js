const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourController");

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route("/:destination")
  .get(tourController.getTour)
  .put(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
