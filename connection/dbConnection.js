const mongoose = require('mongoose');
const db = "mongodb://splassiveAdmin:1Ho30V08z1w7q415@cluster0-shard-00-00.cjzsc.mongodb.net:27017,cluster0-shard-00-01.cjzsc.mongodb.net:27017,cluster0-shard-00-02.cjzsc.mongodb.net:27017/SPLASHNETWORK?ssl=true&replicaSet=atlas-lceqrd-shard-0&authSource=admin&retryWrites=true&w=majority"
// const db = "mongodb+srv://splassiveAdmin:1Ho30V08z1w7q415@cluster0.cjzsc.mongodb.net/SPLASHNETWORK?retryWrites=true&w=majority&ssl=true"
const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB successfully connected') 
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB;