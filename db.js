const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const carModel = require('./models/car')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/garage');        
        console.log('MongoDB connected!!');
} catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
connectDB()

const newCar = new carModel({
    brand:"Renault",
    model:"Espace",
    year:1999
})
const newCar2 = new carModel({
    brand:"Renault",
    model:"Scenic",
    year:2004
})
const newCar3 = new carModel({
    brand:"Peugeot",
    model:"308",
    year:2017
})

// newCar.save()
// newCar2.save()
// newCar3.save()

carModel.findById('62613dea7a0a5aa156ebb4db').then(res=>console.log(res))
carModel.findByIdAndUpdate('62613dea7a0a5aa156ebb4db', {year:2000}).then(res=>console.log(res))

carModel.deleteMany({brand:"Renault"}).then(res=>console.log(res))

const data = [
    {
        brand:"Aston Martin",
        model:"DB9",
        year:2010
    },
    {
        brand:"Range Rover",
        model:"Discovery Sport",
        year:2017
    }
]
carModel.insertMany(data, (error, docs)=>{
    console.log(error, docs)
})