// Run server wit 'nodemon app.js -e js,hbs'
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index.hbs');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});