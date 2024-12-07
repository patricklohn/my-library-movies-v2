const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', // nome do host
    user: '', // nome do usuario do banco
    password: '',
    database: '', //nome do banco
    waitForConnections: true,
    connectionLimit: 10,
});

module.exports = pool;