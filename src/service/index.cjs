const { db } = require('./database.cjs');

const express = require('express');
const cors = require('cors');
const app = express();

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
