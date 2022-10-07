const mysql = require('mysql2')
require('dotenv').config()

// Create connection with mysql
const db = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  database : process.env.DATABASE_NAME,
  password : process.env.DATABASE_PASSWORD
})

module.exports = db.promise()