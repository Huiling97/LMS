import mysql from 'mysql2';

const db = mysql
  .createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'LMS',
  })
  .promise();

export default db;
