const Character = require('../models/character');

module.exports = {
    index
}

async function index(req, res) {
    try{
        const characters = await Character.find({});
        res.json(characters);
        res.json('hello');
    } catch(err) {
        res.json(err);
    }
}