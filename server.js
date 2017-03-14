var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

//index
app.get('/', (request, response) => {
  response.render('pages/index');
});

//about
app.get('/about', (request, response) => {
  response.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
