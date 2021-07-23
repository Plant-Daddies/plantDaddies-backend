const Plant = require('../Models/Plant')
const seedData = require('./seedData.json')

Plant.deleteMany({})
.then(() => {
    return Plant.insertMany(seedData)
 })
    .then(console.log)
    .catch(console.error)
    .finally(()=>{
        process.exit()
    })

