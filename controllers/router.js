const express = require('express');
const res = require('express/lib/response');
const Plant = require('../db/models/plant-model')

const router = express.Router();

// router.get('/', (req, res) => {
//     Plant.find({}).then(plants => {
//       res.json(plants)
//     })
//   })
router.get('/', (req, res)=> {
  Plant.find({}).then(items => {res.render("index", {allPlants: items})})
});  
  
  // router.get('/id', (req, res) => {
  //   Plant.findById(req.params.id).then(plant => {
  //     res.json(plant)
  //   })
  // })
  
router.get('/containers', (req, res)=> {
    Plant.find({}).then(items => {res.render("containers", {allPlants: items})})
});


//get custom data from each 5 plant card varieties//

router.get("/containers/tomatoes", (req, res) => {
  Plant.find({}).then(items => {res.render("tomatoes", {allPlants: items})}) 
});

router.get("/containers/greens", (req, res) => {
  Plant.find({}).then(items => {res.render("greens", {allPlants: items})}) 
});

router.get("/containers/potatoes", (req, res) => {
  Plant.find({}).then(items => {res.render("potatoes", {allPlants: items})}) 
});

router.get("/containers/onions", (req, res) => {
  Plant.find({}).then(items => {res.render("onions", {allPlants: items})}) 
});

router.get("/containers/vining", (req, res) => {
  Plant.find({}).then(items => {res.render("vining", {allPlants: items})}) 
});

// router.get('/:id', (req, res) => {
//   Plant.findById(req.params.id).then(items => {
//     res.render('edit', items)
//   })
// })
router.get('/:id', (req, res)=> {
  Plant.findById({_id: req.params.id}).then(items => {
      res.render('edit', items)
  })
});

// router.get('/new', (req, res)=> {res.render('new', items);
// });
//create/POST/

// router.post('/add', (req, res) => {
//     console.log('in posting route, this is new object:')
  
//     Plant.create(req.body)  
//     console.log(req.body)
//     .then(items => {
//         res.redirect('/')
//   })
//   .catch(console.error)
// });


//update/edit/PUT/

// router.put('/:id', (req, res) => {
//   console.log(req.params.id)
//   console.log(req.body)
//   Plant.findOneAndUpdate({ _id: req.params.id }, req.body).then(items =>
//       Plant.find({}).then(items => {
//         res.redirect('/containers')
//       })
//     )
// })
// //delete/

// router.delete('/:id', (req, res) => {
//   Plant.findOneAndRemove(
//       {_id: req.params.id},
//       )
//       .then( () => res.redirect('/containers'))
//       .catch(console.error)
// })








module.exports = router;