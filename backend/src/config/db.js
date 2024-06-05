const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nuscampuscompass',
    password: 'yourpassword', // Replace with your actual password
    port: 5432,
});

module.exports = pool;