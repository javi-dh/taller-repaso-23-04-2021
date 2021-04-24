const movies = require('../models/moviesModel');

const controller = {
	home: (req, res) => {
		let allMovies = movies.findAll();
		res.render('home', { 
			allMovies,
			developer: 'Javi Herrera',
			date: new Date
		});
	},

	detail: (req, res) => {
		let id = req.params.id;
		let movie = movies.findById(id);
		if (movie !== undefined) {
			return res.render('detail', { movie });
		} 
		return res.redirect('/movies');
	},

	// Guarda en DB
	store: (req, res) => {
		// 1. Obtener la información que vino por POST desde el formulario (req.body)
		// 2. Insertar el nuevo registro en la DB (let lastMovie = movie.create(req.body))
		// 3. Redirecciónar al detalle de la película res.redirect('/movies/'+ lastMovie)
	}
}

module.exports = controller;