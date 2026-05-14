const mysql = require('mysql2/promise');
requeire('dotenv').config();

const pool = mysql.createPool({
    host: '172.16.2.26',
    user: 'blog',
    password: '0120',
    database: 'blog_db',
    waitForConnections: true,
    connectionLimit: 10
});  

module.exports = pool;