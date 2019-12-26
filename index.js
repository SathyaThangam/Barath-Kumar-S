const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./querries')
const port =3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  app.post('/users/login', db.getUsers)
  app.post('/users/signup', db.createUser)
  app.put('/users/:id', db.updateUser)
  app.delete('/users/:id', db.deleteUser)
  
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  