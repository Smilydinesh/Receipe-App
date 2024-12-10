const mongoose = require('mongoose');

const receipeSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true,
        unique: true
    },
    Ingredients: {
        type: [String],
        required: true
    },
    Instructions: {
        type: [String],
        required: true
    },
    PreparationTime: {
        type: String,
        required: true
    }
});

const Receipe = mongoose.model('Receipe', receipeSchema);

module.exports = Receipe;