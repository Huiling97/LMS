import axios from 'axios';
import URLConstants from '../util/url-constants';

const getEntries = async () => {
  try {
    const response = await axios.get(`${URLConstants.ENTRIES_PATH}/all`);

    if (response) {
      const { data } = response;

      return data;
    }
  } catch (e) {
    throw e;
  }
};

const getEntriesByTopicId = async (courseId, topicId) => {
  try {
    const response = await axios.get(
      `${URLConstants.COURSES_PATH}/${courseId}/topics/${topicId}/entries`
    );

    if (response) {
      const { data } = response;

      return data;
    }
  } catch (e) {
    throw e;
  }
};

export { getEntries, getEntriesByTopicId };
