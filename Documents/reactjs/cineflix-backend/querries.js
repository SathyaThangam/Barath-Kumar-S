const Pool = require('pg').Pool

const pool = new Pool({
    user: 'bk',
    host: 'localhost',
    database: 'cineflix',
    password: 'bk191998',
    port: 5432,
  })

  pool.query()

