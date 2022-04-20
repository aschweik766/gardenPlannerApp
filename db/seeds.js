const Plant = require('./models/plant-model')
const seedData = require('../db/plant.json')
    console.log(seedData);


Plant.deleteMany({})
    .then(()=> {
        return Plant.collection.insertMany(seedData)
    })
    .then((res) => console.log(res))
    .finally(() => {
        process.exit()
    });