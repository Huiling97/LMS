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

const getEntriesByTopicId = async (topicId) => {
  const q = 'SELECT * FROM entries WHERE  topic_id = ?';

  try {
    const [rows] = await db.query(q, [topicId]);

    return rows;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getEntries,
  getEntriesByTopicId,
};
