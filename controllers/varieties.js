const express = require('express');
const res = require('express/lib/response');
const Variety = require('../db/models/variety-model');

// const Varieties = require('')

const router = express.Router();

// router.get('/', (req, res) => {
//     Variety.find({}).then(items => {
//       res.render(items)
//     })
//     .catch(console.error)
//   });

router.get('/', (req, res)=> {
  Variety.find({}).then(items => {res.render("varietyTomatoes", {varieties: items})}).catch(console.error)
});  


// router.get('/:id', (req, res) => {
//     Variety.findById(req.params.id).then(items => res.send(items)).catch(console.error)
// })  

router.get('/:id', (req, res)=> {
  Variety.findById({_id: req.params.id}).then(items => {
      res.render('varietyEdit', items)
  }).catch(console.error)
});


router.get('/varietyTomatoes/new', (req, res)=> {res.render('new')
});



//add//
router.post('/', (req, res)=> {
    Variety.create(req.body)
    .then(items => res.render('new', items)).catch(console.error)
})

//edit//
// router.put('/:id', (req, res) => {
//     Variety.findByIdAndUpdate(req.params.id, req.body).then(item => res.send(item)).catch(console.error)
// })

router.put('/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  Variety.findOneAndUpdate({ _id: req.params.id }, req.body).then(items => {
        res.redirect('/varietyTomatoes')
      })
      .catch(console.error)
})




module.exports = router;