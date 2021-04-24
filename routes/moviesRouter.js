const express = require('express');
const router = express.Router();

// Controller
const controller = require('../controllers/moviesController');

// http://localhost:3000/movies
router.get('/', controller.home);

// http://localhost:3000/movies/N
router.get('/:id', controller.detail);

module.exports = router;