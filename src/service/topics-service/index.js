import { getTopics, getTopicsByCourseId } from './database.js';
import URLConstants from '../../shared/util/url-constants.js';

const topicsRequestHandler = (app) => {
  app.get(`${URLConstants.TOPICS_PATH}/all`, async (_, res) => {
    try {
      const topics = await getTopics();

      res.status(200).send(topics);
    } catch (e) {
      res.status(500).send({ error: e.message || 'Database error' });
    }
  });

  app.get(`${URLConstants.COURSES_PATH}/:courseId/topics`, async (req, res) => {
    const { courseId } = req.params;

    try {
      const topics = await getTopicsByCourseId(courseId);

      res.status(200).send(topics);
    } catch (e) {
      res.status(500).send({ error: e.message || 'Database error' });
    }
  });
};

export { topicsRequestHandler };
