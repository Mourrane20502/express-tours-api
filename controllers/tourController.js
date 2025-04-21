const tours = require("../models/tourModel");

// GET all tours
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    data: tours,
  });
};

// GET tour by destination
exports.getTour = (req, res) => {
  const { destination } = req.params;
  const tour = tours.find(
    (t) => t.destination.toLowerCase() === destination.toLowerCase()
  );

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.status(200).json({
    status: "success",
    data: tour,
  });
};

// POST create new tour
exports.createTour = (req, res) => {
  const newTour = { ...req.body };
  tours.push(newTour);
  res.status(201).json({
    message: "Tour added",
    data: newTour,
  });
};

// PUT update tour
exports.updateTour = (req, res) => {
  const { destination } = req.params;
  const index = tours.findIndex(
    (t) => t.destination.toLowerCase() === destination.toLowerCase()
  );

  if (index === -1) {
    return res.status(404).json({ message: "Tour not found" });
  }

  tours[index] = { ...tours[index], ...req.body };
  res.status(200).json({
    message: "Tour updated",
    data: tours[index],
  });
};

// DELETE tour
exports.deleteTour = (req, res) => {
  const { destination } = req.params;
  const index = tours.findIndex(
    (t) => t.destination.toLowerCase() === destination.toLowerCase()
  );

  if (index === -1) {
    return res.status(404).json({ message: "Tour not found" });
  }

  tours.splice(index, 1);
  res.status(200).json({
    message: "Tour deleted",
    data: tours,
  });
};
