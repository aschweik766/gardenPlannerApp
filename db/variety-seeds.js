const Variety = require('./models/variety-model');
const newSeedData = require('../db/variety.json')
    console.log(newSeedData);





Variety.deleteMany({})
.then(()=> {
    return Variety.collection.insertMany(newSeedData)
})
.then((res) => console.log(res))
.finally(() => {
    process.exit()
});
