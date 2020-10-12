let mysql = require('mysql')
require('dotenv').config()

let connection

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  })
}

connection.connect((err) => {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n')
    return
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n')
})

module.exports = connection
