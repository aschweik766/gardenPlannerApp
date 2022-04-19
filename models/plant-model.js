const mongoose = require('../db/connection')
const PlantSchema = new mongoose.Schema(
        {
           name: {
               id: Number,
               type: String,
               required: true,
           },
           variety: {
               id: Number,
               recommendation: String,
               color: String,
               url: String,
           },
           _links: {
               url: String,
           },
           zone: {
               type: String,
           }, 
           season: {
               time: String,
           },
           maturation: {
               days: Number,    
           },
           light: String,
           fruit: {
               size: String,
               flavor: String,
           },
           plant: {
               height: String,
               spacing: Number,
           },
           supports: String,
           diseases: {
               type: String,
           },
           pests: {
               type: String,
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

const Plant = mongoose.model('Plant', PlantSchema)

module.exports = Plant