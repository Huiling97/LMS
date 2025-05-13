import db from '../database.js';

const getEntries = async () => {
  const q = 'SELECT * FROM entries';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

const getEntriesByTopicId = async (topicId) => {
  const q = 'SELECT * FROM entries WHERE  topic_id = ?';

  try {
    const [rows] = await db.query(q, [topicId]);

    return rows;
  } catch (e) {
    throw e;
  }
};

export { getEntries, getEntriesByTopicId };
