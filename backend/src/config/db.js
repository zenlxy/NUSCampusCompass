const { Pool } = require('pg');
const pool = new Pool({
    user: 'janellepow',
    host: 'localhost',
    database: 'mydatabase',
    password: 'pAsswoRd!23', // Replace with your actual password
    port: 5432,
});

module.exports = pool;