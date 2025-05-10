const { getCourses } = require('./database.cjs');
const { URLConstants } = require('../util/url-constants.cjs');

const coursesRequestHandler = (app) => {
  app.get(`${URLConstants.COURSES_PATH}/all`, async (_, res) => {
    try {
      const courses = await getCourses();

      res.status(200).send(courses);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { coursesRequestHandler };
