import { verifyLoginAuth } from './database.cjs';
import URLConstants from '../util/url-constants.js';

const loginAuthHandler = (app) => {
  app.post(`${URLConstants.LOGIN_PATH}`, async (req, res) => {
    const { username, password } = req?.body;

    try {
      const user = await verifyLoginAuth(username, password);

      if (user.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const { username: userUsername, role } = user;

      res.status(200).json({
        username: userUsername,
        role,
      });
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

export { loginAuthHandler };
