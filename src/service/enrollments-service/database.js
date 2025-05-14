import db from '../database.js';

const getEnrollments = async () => {
  const q = 'SELECT * FROM enrollments';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

export { getEnrollments };
