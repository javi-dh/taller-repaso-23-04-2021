const fs = require('fs');
const path = require('path');

const movie = {
	getFileContent: () => {
		let filePath = path.join(__dirname, '../data/series.json');
		let fileContentString = fs.readFileSync(filePath, 'utf8');
		let fileContentArray = JSON.parse(fileContentString);
		return fileContentArray;
	},
	findAll: function () {
		return this.getFileContent();
	},
	findById: function (id) {
		let moviesDB = this.getFileContent();
		let movieFinded = moviesDB.find(oneMovie => oneMovie.id == id);
		return movieFinded;
	},
	create: function (newMovie) {
		let moviesDB = this.getFileContent();
		// newMovie.id = moviesDB.length + 1;
		newMovie.id = moviesDB[moviesDB.length - 1].id + 1;
		moviesDB.push(newMovie);
		let filePath = path.join(__dirname, '../data/series.json');
		fs.writeFileSync(filePath, JSON.stringify(moviesDB, null, ' '));
		return newMovie.id;
	},
	theBestThree: function () {
		let moviesDB = this.getFileContent();
		let bestThree = moviesDB.filter(oneMovie => oneMovie.rating >= 7);
		return bestThree;
	}
}

movie.create({
	title: 'Avengers',
	review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, rerum, laudantium autem delectus unde molestias, numquam totam sunt quaerat sapiente esse facilis blanditiis. Autem, ex eos? Iste qui veritatis expedita!',
	rating: 8
})

module.exports = movie;