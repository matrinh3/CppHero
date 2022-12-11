const mysql = require('mysql');
const db_config = require('./db.config')
const pool  = mysql.createPool(db_config);
module.exports = pool


