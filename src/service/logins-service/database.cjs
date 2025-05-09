const { db } = require('../database.cjs');

const getLogins = async () => {
  const q = 'SELECT * FROM login';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getLogins,
};
