const { db } = require('../database.cjs');

const getUsers = async () => {
  const q = 'SELECT * FROM users';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getUsers,
};
