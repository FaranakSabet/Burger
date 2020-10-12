let mysql = require('mysql')

let connection

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: 'durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'bm39a8f5w4gv73jo',
    password: 'b31bfasl42jty8sm',
    database: 'wychdah450qu4bos',
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
