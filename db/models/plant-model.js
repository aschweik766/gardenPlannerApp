const mongoose = require('../connection')

const PlantsSchema = new mongoose.Schema(
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
               img: String,
           },
           _links: {
               url: String,
           },
           videos: String,
           img: {
               url: String,
            },
           season: {
               time: String,
               tips: String,
           },
           maturation: {
               days: String,    
           },
           light: String,
           harvest: {
               size: String,
               characteristics: String,
           },
           plant: {
               height: String,
               seedDepth: String,
               spacing: String,
               soilTemperature: String,
           },
           supports: String,
           diseases: {
               kind: String,
               tips: String,
           },
           pests: {
               kind: String,
               tips: String,
           },
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

const Plant = mongoose.model('Plant', PlantsSchema);

module.exports = Plant;