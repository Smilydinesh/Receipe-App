const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://smilydinesh011:71Az8AnHekAhZrFX@cluster0.kqklt.mongodb.net/Receipes');
        console.log('Database Connected');
    }
    catch(error) {
        console.log('Database Connection Failed');
    }
};

module.exports = connectDB;