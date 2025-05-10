const { getLogins } = require('./database.cjs');
const { URLConstants } = require('../util/url-constants.cjs');

const loginsRequestHandler = (app) => {
  app.get(`${URLConstants.LOGINS_PATH}/all`, async (_, res) => {
    try {
      const logins = await getLogins();

      res.status(200).send(logins);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { loginsRequestHandler };
