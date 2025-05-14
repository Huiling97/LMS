import { getLogins } from './database.js';
import URLConstants from '../../shared/util/url-constants.js';

const loginsRequestHandler = (app) => {
  app.get(`${URLConstants.LOGINS_PATH}/all`, async (_, res) => {
    try {
      const logins = await getLogins();

      res.status(200).send(logins);
    } catch (e) {
      res.status(500).send({ error: e.message || 'Database error' });
    }
  });
};

export { loginsRequestHandler };
