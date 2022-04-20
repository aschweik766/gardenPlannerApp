const express = require('express')
const Plant = require('../db/models/plant-model')

const router = express.Router();

router.get('/', (req, res) => {
    Plant.find({}).then(plants => {
      res.json(plants)
    })
  })
  
  router.get('/id', (req, res) => {
    Plant.findById(req.params.id).then(plant => {
      res.json(plant)
    })
  })
  
router.get('/plant', (req, res)=> {
    Plant.find({}).then(items => {res.render("index", {allPlants: Plant})})
});


module.exports = router;