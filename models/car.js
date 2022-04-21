const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Car = mongoose.Schema({
    brand:String,
    model:String,
    year:Number,
    created:Date

})
var CarModel = mongoose.model('Car', Car);
module.exports = CarModel;
