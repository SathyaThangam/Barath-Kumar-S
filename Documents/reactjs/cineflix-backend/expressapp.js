const express = require('express');
const logger = require('morgan');
var port = 8080; 
const app = express();

const db = require('./database/config/config.js');

// Log requests to the console.
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', function(req, res) {
//   res.send('hello world! hahaha');
// });

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

// db.authenticate()
//   .then(()=> console.log('Database is connected...'))
//   .catch((err)=>console.log("Error : " + err)) 

app.use('/favourites', require('./routes/favourites'));
app.use('/watchlist', require('./routes/watchlist'));

// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

module.exports = app;