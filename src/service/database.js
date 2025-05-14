import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const db = mysql
  .createConnection({
    host: process.env.VITE_MY_SQL_AIVEN_HOST,
    port: process.env.VITE_MY_SQL_AIVEN_PORT,
    user: process.env.VITE_MY_SQL_AIVEN_USER,
    password: process.env.VITE_MY_SQL_AIVEN_PASSWORD,
    database: process.env.VITE_MY_SQL_AIVEN_DATABASE,
  })
  .promise();

export default db;
