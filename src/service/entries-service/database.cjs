const { db } = require('../database.cjs');

const getEntries = async () => {
  const q = 'SELECT * FROM entries';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getEntries,
};
