import { getEnrollments } from './database.js';
import URLConstants from '../util/url-constants.js';

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

export { enrollmentsRequestHandler };
