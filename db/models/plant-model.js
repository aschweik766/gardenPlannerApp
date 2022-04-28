//updated plant model//

const mongoose = require('../connection')

const PlantsSchema = new mongoose.Schema(
        {
               name: String,
               group: Number,
               img: {
                    url: String,
               },
               videos: String,
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
                variety: {
                    vId: Number,
                    recommendation: String,
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
            },
       
        { timestamps: true }        
)

const Plant = mongoose.model('Plant', PlantsSchema);

module.exports = Plant;

