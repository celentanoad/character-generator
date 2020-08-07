const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

router.get('/', charactersCtrl.index);

module.exports = router;