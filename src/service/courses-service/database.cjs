const { db } = require('../database.cjs');

const getCourses = async () => {
  const q = 'SELECT * FROM courses';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getCourses,
};
