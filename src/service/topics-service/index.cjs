const { getTopics } = require('./database.cjs');

const API_PATH = '/api/v1/topics';

const topicsRequestHandler = (app) => {
  app.get(`${API_PATH}/all`, async (_, res) => {
    try {
      const topics = await getTopics();

      res.status(200).send(topics);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { topicsRequestHandler };
