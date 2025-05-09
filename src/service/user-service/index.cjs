const { getUsers } = require('./database.cjs');

const API_PATH = '/api/v1/users';

const usersRequestHandler = (app) => {
  app.get(`${API_PATH}/all`, async (_, res) => {
    try {
      const users = await getUsers();

      res.status(200).send(users);
    } catch (e) {
      res.status(500).send({ error: 'Internal server error' });
    }
  });
};

module.exports = { usersRequestHandler };
