const { db } = require('./database.cjs');

const express = require('express');
const cors = require('cors');
const app = express();

const { coursesRequestHandler } = require('./courses-service/index.cjs');

app.use(cors());

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

coursesRequestHandler(app);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
