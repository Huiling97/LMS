import db from '../database.js';

const getLogins = async () => {
  const q = 'SELECT * FROM login';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

export { getLogins };
