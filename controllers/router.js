const express = require('express')
const Plant = require('../db/models/plant-model')

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


//get custom data from each 5 plant card varieties//

router.get("/tomatoes", (req, res) => {
  Plant.find({}).then(items => {res.render("tomatoes", {allPlants: items})}) 
});

router.get("/greens", (req, res) => {
  Plant.find({}).then(items => {res.render("greens", {allPlants: items})}) 
});

router.get("/potatoes", (req, res) => {
  Plant.find({}).then(items => {res.render("potatoes", {allPlants: items})}) 
});

router.get("/onions", (req, res) => {
  Plant.find({}).then(items => {res.render("onions", {allPlants: items})}) 
});

router.get("/vining", (req, res) => {
  Plant.find({}).then(items => {res.render("vining", {allPlants: items})}) 
});


module.exports = router;