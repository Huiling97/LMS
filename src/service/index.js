import cors from 'cors';
import express from 'express';

import db from './database.js';

import { coursesRequestHandler } from './courses-service/index.js';
import { enrollmentsRequestHandler } from './enrollments-service/index.js';
import { entiresRequestHandler } from './entries-service/index.js';
import { loginAuthHandler } from './auth-service/index.js';
import { loginsRequestHandler } from './logins-service/index.js';
import { topicsRequestHandler } from './topics-service/index.js';
import { usersRequestHandler } from './users-service/index.js';

const app = express();

app.use(cors());
app.use(express.json());

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
loginAuthHandler(app);
loginsRequestHandler(app);
topicsRequestHandler(app);
usersRequestHandler(app);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
