const express = require('express')
const Plant = require('../db/models/plant-model')
const tomatoData = require('../db/models/plant-model')
const router = express.Router();

router.get('/', (req, res) => {
    Plant.find({}).then(plants => {
      res.json(plants)
    })
  })
router.get('/gardenPlannerApp', (req, res)=> {
  Plant.find({}).then(items => {res.render("index", {allPlants: items})})
});  
  
  router.get('/id', (req, res) => {
    Plant.findById(req.params.id).then(plant => {
      res.json(plant)
    })
  })
  
router.get('/containers', (req, res)=> {
    Plant.find({}).then(items => {res.render("containers", {allPlants: items})})
});


//pull data from each 5 plant varieties//

router.get("/tomatoes", (req, res) => {
  Plant.find({}).then(items => {res.render("plants", {tomatoData: items})}) 
});

module.exports = router;