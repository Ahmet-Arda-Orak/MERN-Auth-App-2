const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://ahmet:fMr3PR3zf47jHUX@cluster0.k0wjs.mongodb.net/app?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex:true
        });
        console.log("Hello from database");
    }catch(error){
        console.log("Eror Cant find");
    }
}

module.exports = connectDB; 