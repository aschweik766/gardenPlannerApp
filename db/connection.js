const mongoose = require('mongoose')

mongoose.Promise = Promise

const mongoURI =
    process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://localhost/gardenPlanner'

mongoose.connect(mongoURI, {})
    .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;
