const { getLogins } = require('./database.cjs');

const API_PATH = '/api/v1/logins';

const loginsRequestHandler = (app) => {
  app.get(`${API_PATH}/all`, async (_, res) => {
    try {
      const logins = await getLogins();

      res.status(200).send(logins);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { loginsRequestHandler };
