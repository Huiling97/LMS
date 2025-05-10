const { getEntries, getEntriesByTopicId } = require('./database.cjs');
const { URLConstants } = require('../util/url-constants.cjs');

const entiresRequestHandler = (app) => {
  app.get(`${URLConstants.ENTRIES_PATH}/all`, async (_, res) => {
    try {
      const entries = await getEntries();

      res.status(200).send(entries);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });

  app.get(
    `${URLConstants.COURSES_PATH}/:courseId/topics/:topicId/entries`,
    async (req, res) => {
      const { topicId } = req.params;

      try {
        const entries = await getEntriesByTopicId(topicId);

        res.status(200).send(entries);
      } catch (e) {
        res.status(500).send({ error: 'Internal server error' });
      }
    }
  );
};

module.exports = { entiresRequestHandler };
