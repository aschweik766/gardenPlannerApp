const mongoose = require("mongoose")

const mongoURI =
    process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : `mongodb://localhost:27107/gardenPlanner`

mongoose.connect(mongoURI, )
.then((instance)=> {console.log(`connected to db: ${instance.connections[0].name}`)
.catch((err)=> console.log(`connection to db failed due to: ${err}`))})

module.exports = mongoose;
