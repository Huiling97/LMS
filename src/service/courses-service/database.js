import db from '../database.js';

const getCourses = async () => {
  const q = 'SELECT * FROM courses';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

export { getCourses };
