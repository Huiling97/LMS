import db from '../database.js';

const getUsers = async () => {
  const q = 'SELECT * FROM users';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

export { getUsers };
