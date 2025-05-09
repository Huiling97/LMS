const { getEntries } = require('./database.cjs');

const API_PATH = '/api/v1/entries';

const entiresRequestHandler = (app) => {
  app.get(`${API_PATH}/all`, async (_, res) => {
    try {
      const entries = await getEntries();

      res.status(200).send(entries);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { entiresRequestHandler };
