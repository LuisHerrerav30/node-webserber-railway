const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handelbars
app.set('view engine','hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') )

app.get('/',(req,res) =>{
  res.render('home', {
    nombre: 'Luis Herrera',
    titulo: 'Curso de node'
  });
});

app.get('/generic', (req,res) => {
  res.render('generic');
});

app.get('/elements', (req,res) => {
  res.render('elements');
});

// el __dirname es para concatener el path completo del archivo
app.get('*', (req,res) => {
  res.sendFile( __dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log('La consola esta corriendo en el puerto: ', port);
} )