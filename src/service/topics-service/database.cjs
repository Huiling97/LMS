const { db } = require('../database.cjs');

const getTopics = async () => {
  const q = 'SELECT * FROM topics';

  try {
    const [rows] = await db.query(q);

    return rows;
  } catch (e) {
    throw e;
  }
};

const getTopicsByCourseId = async (courseId) => {
  const q = 'SELECT * FROM topics WHERE course_id = ?';

  try {
    const [rows] = await db.query(q, [courseId]);

    return rows;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getTopics,
  getTopicsByCourseId,
};
