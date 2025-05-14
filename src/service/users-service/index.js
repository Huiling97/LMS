import { getUsers } from './database.js';
import URLConstants from '../../shared/util/url-constants.js';

const usersRequestHandler = (app) => {
  app.get(`${URLConstants.USERS_PATH}/all`, async (_, res) => {
    try {
      const users = await getUsers();

      res.status(200).send(users);
    } catch (e) {
      res.status(500).send({ error: e.message || 'Database error' });
    }
  });
};

export { usersRequestHandler };
