const express = require('express')
const bodyParser = require('body-parser')
var path = require('path');
const app = express()
const db = require('./querries')
const port =3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});
app.get('/script.js', function(req, res) {
  res.sendFile(__dirname + "/" + "script.js");
});
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/mixbook.html'));
})
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});
app.get('/photobooks', (request, response) => {
  response.sendFile(path.join(__dirname + '/photobook.html'));
})
  app.post('/users/login', db.getUsers)
  app.post('/users/signup', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)
  
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  