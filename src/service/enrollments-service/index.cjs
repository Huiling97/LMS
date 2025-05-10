const { getEnrollments } = require('./database.cjs');
const { URLConstants } = require('../util/url-constants.cjs');

const enrollmentsRequestHandler = (app) => {
  app.get(`${URLConstants.ENROLLMENTS_PATH}/all`, async (_, res) => {
    try {
      const enrollments = await getEnrollments();

      res.status(200).send(enrollments);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { enrollmentsRequestHandler };
