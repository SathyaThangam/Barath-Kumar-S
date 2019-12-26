const Pool = require('pg').Pool
const pool = new Pool({
  user: 'bk',
  host: 'localhost',
  database: 'api',
  password: 'bk191998',
  port: 5432,
})
const getUsers = (request, response) => {
  const { mail, pas } = request.body
  pool.query('SELECT * FROM users WHERE email = $1 AND pass = $2', [mail, pas], (error, results) => {
    if (error) {
      throw error
    }
    if(results.rowCount > 0)
    {
        response.redirect('http://www.mixbook.com');
    }
    else{
      response.status(200).send(`Wrong Credentials....Get back and Enter the correct credentials`);
    }
  })
}
const createUser = (request, response) => {
  const { email, pass } = request.body

  pool.query('INSERT INTO users (email, pass) VALUES ($1, $2)', [email, pass], (error, results) => {
    if (error) {
      throw error
    }
    console.log(request.body);
    response.status(201).send(`Successfully Signed UP....`);
  })
}
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { email, pass } = request.body

  pool.query(
    'UPDATE users SET email = $1, pass = $2 WHERE id = $3',
    [email, pass, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
}
