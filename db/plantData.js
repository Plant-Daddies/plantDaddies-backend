const Plant = require('../Models/Plant')
const seedData = require('./seedData.json')

Plant.deleteMany({})
.then(() => {
    return seedData.map((plant)=>{
        Plant.insertMany(plant);
    })
 })
    .then(console.log)
    .catch(console.error)
    .finally(()=>{
        process.exit()
    })