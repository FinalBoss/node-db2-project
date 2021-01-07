const express = require("express");
const cars = require('./car-model');

const router = express.Router();



router.post('/', async (req, res) => {

    const car = req.body;

    try {
        const saved = await cars.add(car);
        res.status(201).json(saved);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const changedCar = await cars.update(id, changes);
    if (changedCar) {
      res.json(changedCar);
    } else {
      res.status(404).json({ message: 'invalid id' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error with db', error: err });
  }
});

module.exports = router;