const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    characterClass: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Character', characterSchema);