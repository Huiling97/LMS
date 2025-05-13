import { getCourses } from './database.js';
import URLConstants from '../util/url-constants.js';

const coursesRequestHandler = (app) => {
  app.get(`${URLConstants.COURSES_PATH}/all`, async (_, res) => {
    try {
      const courses = await getCourses();

      res.status(200).send(courses);
    } catch (e) {
      res.status(500).send({ error: e.message || 'Database error' });
    }
  });
};

export { coursesRequestHandler };
