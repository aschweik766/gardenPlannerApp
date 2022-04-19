const mongoose = require('../db/connection')
const PlantSchema = new mongoose.Schema(
        {
           name: {
               type: String,
               required: true,
           }, 
           id: Number,
           variety: {
               id: Number,
               recommendation: String,
               color: String,
           },
           _links: {
               url: String,
           },
           img: {
               url: String,
            },
           season: {
               time: String,
               tips: String,
           },
           maturation: {
               days: Number,    
           },
           light: String,
           harvest: {
               size: String,
               characteristics: String,
           },
           plant: {
               height: String,
               spacing: Number,
           },
           supports: String,
           diseases: String,
           pests: String,
           companions: {
               plant: String,
               insects: String,
           },
           guide: {
               url: String,
           },
        },
        { timestamps: true }
)

const Plant = mongoose.model('Plant', PlantSchema)

module.exports = Plant