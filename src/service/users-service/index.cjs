const { getUsers } = require('./database.cjs');
const { URLConstants } = require('../util/url-constants.cjs');

const usersRequestHandler = (app) => {
  app.get(`${URLConstants.USERS_PATH}/all`, async (_, res) => {
    try {
      const users = await getUsers();

      res.status(200).send(users);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { usersRequestHandler };
