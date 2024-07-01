const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'torinocars',
})

connection.connect(function (err) {
    if (err) {
        console.error(err);
    }
    console.log('Connected to Taller');
})

module.exports = connection;