const mongoose = require('../connection')

const VarietySchema = new mongoose.Schema(
        {
            variety: String,
            vId: Number,
            color: String,
            img: String,
            _links: {
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
        },
        { timestamps: true } 
    )

const Variety = mongoose.model('Variety', VarietySchema);

module.exports = Variety;
       