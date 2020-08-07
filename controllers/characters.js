const Character = require('../models/character');

module.exports = {
    index,
    create
}

async function index(req, res) {
    try{
        const characters = await Character.find({});
        res.json(characters);
    } catch(err) {
        res.json(err);
    }
}

async function create(req, res) {
    try{
        const character = await Character.create(req.body);
        res.json(character);
    } catch (err) {
        res.json(err);
    }
}