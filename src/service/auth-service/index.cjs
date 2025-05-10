const { verifyLoginAuth } = require('./database.cjs');
const { URLConstants } = require('../util/url-constants.cjs');

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

module.exports = { loginAuthHandler };
