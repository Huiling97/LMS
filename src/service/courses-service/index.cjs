const { getCourses } = require('./database.cjs');

const API_PATH = '/api/v1/courses';

const coursesRequestHandler = (app) => {
  app.get(`${API_PATH}/all`, async (_, res) => {
    try {
      const courses = await getCourses();

      res.status(200).send(courses);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { coursesRequestHandler };
