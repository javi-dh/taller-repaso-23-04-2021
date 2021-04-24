const express = require('express');
const app = express();

// Setear el motor de vistas que vamos a usar
app.set('view engine', 'ejs');

// Rutas de archivos públicos
app.use( express.static('./public') );

const moviesRouter = require('./routes/moviesRouter');

app.use('/movies', moviesRouter);

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));