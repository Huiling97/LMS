const { getEnrollments } = require('./database.cjs');

const API_PATH = '/api/v1/enrollments';

const enrollmentsRequestHandler = (app) => {
  app.get(`${API_PATH}/all`, async (_, res) => {
    try {
      const enrollments = await getEnrollments();

      res.status(200).send(enrollments);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { enrollmentsRequestHandler };
