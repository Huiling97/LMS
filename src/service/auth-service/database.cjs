const { db } = require('../database.cjs');

const verifyLoginAuth = async (username, password) => {
  const q = 'SELECT * FROM auth WHERE username = ? AND password = ?';

  try {
    const [rows] = await db.query(q, [username, password]);

    return rows[0];
  } catch (e) {
    throw e;
  }
};

module.exports = {
  verifyLoginAuth,
};
