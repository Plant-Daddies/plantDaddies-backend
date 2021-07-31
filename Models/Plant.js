const mongoose = require('../db/connection')

const plantSchema = new mongoose.Schema({
    name: String,
    genus: String,
    timer: Number,
    zone: String,
    water: String,
    image:String,
    lightRequired: String,
    notes: String,
    fertilizer: String,
    houseplant: Boolean
})


module.exports = mongoose.model('Plant', plantSchema);
