const Receipe = require('../models/receipeModels');

const getAllReceipes = async (req, res) => {
    try {
        const getReceipe = await Receipe.find();
        res.json(getReceipe);
    }
    catch(error) {
        res.status(500).json({Error: 'Internal Server Error'});
    }
};

const getReceipesById = async (req, res) => {
    try {
        const getreceipe = req.params.Id
        const getReceipebyId = await Receipe.findOne({Id:getreceipe});
        if(!getReceipebyId) {
            return res.status(404).json({Message: 'Recipe not Found'});
        }
        else {
            res.status(200).json(getReceipebyId);
        }
    }
    catch(error) {
        console.log(error);
        res.status(500).json({Error: 'Internal Server Error'});
    }
};

const createReceipes = async (req, res) => {
    try {
        const createReceipe = await Receipe.create(req.body);
        res.status(201).json(createReceipe);
    }
    catch(error) {
        res.status(500).json({Error: 'Internal Server Error'});
    }
};

const updateReceipesById  = async (req, res) => {
    try {
        const updatereceipe = req.params.Id
        const updateReceipebyId = await Receipe.findOne({ Id: updatereceipe });
        if(!updateReceipebyId) {
            return res.status(404).json({Error: 'Receipe not Found'});
        }
        else {
            const updatedRecipe = await Receipe.updateOne(
                { Id: updatereceipe },
                { $set: req.body }
            );
            res.status(200).json('Receipe Updated Successfully');
        }
    }
    catch(error) {
        res.status(500).json({Error: 'Internal Server Error'});
    }
};

const deleteReceipesById = async (req, res) => {
    try {
        const deletereceipe = req.params.Id
        const deleteReceipebyId = await Receipe.findOne({Id:deletereceipe});
        if(!deleteReceipebyId) {
            return res.status(404).json({Error: 'Receipe not Found'});
        }
        else {
            await Receipe.deleteOne({ Id: deletereceipe });
            res.status(200).json('Receipe Deleted Successfully');
        }
    }
    catch(error) {
        res.status(500).json({Error: 'Internal Server Error'});
    }
};

module.exports = {
    getAllReceipes,
    getReceipesById,
    createReceipes,
    updateReceipesById,
    deleteReceipesById
};