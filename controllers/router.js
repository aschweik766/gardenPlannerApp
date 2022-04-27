const express = require('express');
const res = require('express/lib/response');
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



//create/POST/

router.post('/new', (req, res) => {
  console.log('in posting')
  Plant.create(req.body).then(plant => {
    res.redirect('/')
})
.catch(console.error)
});


//update/edit/PUT/

router.put('/:id', (req, res) => {
  console.log('put route edit success')
  Plant.findOneAndUpdate(
    {
      recommendation: req.params.recommendation
    }, 
    // {
    //   recommendation: req.body.variety.recommendation,
    //   img: req.body.variety.recommendation.img.url,
    //   supports: req.body.supports,
    //   light: req.body.light
    // },
    {new: true},
    req.body)
  .then(items => {
    res.render('edit', items)
  })
  .catch(console.error)
});


// //delete/

// router.delete('/:id', (req, res)=> {
//   Plant.findOneAndRemove({_id: req.params.id}).then(()=> res.redirect('/containers'))
// });

router.get('/new', (req, res)=> {res.render('new')});

router.get('/:id', (req, res)=> {
  Plant.find({recommendation: req.params.recommendation}).then(items => {res.render('edit', items)})
});





module.exports = router;