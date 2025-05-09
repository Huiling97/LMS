const { db } = require('./database.cjs');

const express = require('express');
const cors = require('cors');
const app = express();

const { coursesRequestHandler } = require('./courses-service/index.cjs');
const {
  enrollmentsRequestHandler,
} = require('./enrollments-service/index.cjs');
const { entiresRequestHandler } = require('./entries-service/index.cjs');
const { loginsRequestHandler } = require('./logins-service/index.cjs');
const { topicsRequestHandler } = require('./topics-service/index.cjs');
const { usersRequestHandler } = require('./users-service/index.cjs');

app.use(cors());

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

coursesRequestHandler(app);
enrollmentsRequestHandler(app);
entiresRequestHandler(app);
loginsRequestHandler(app);
topicsRequestHandler(app);
usersRequestHandler(app);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
