const { db } = require('../database.cjs');

const getEnrollments = async () => {
  const q = 'SELECT * FROM enrollment';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getEnrollments,
};
