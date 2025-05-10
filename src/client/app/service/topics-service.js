import axios from 'axios';
import URLConstants from '../util/url-constants';

const getTopics = async () => {
  try {
    const response = await axios.get(`${URLConstants.TOPICS_PATH}/all`);

    if (response) {
      const { data } = response;

      return data;
    }
  } catch (e) {
    throw e;
  }
};

const getTopicsByCourseId = async (courseId) => {
  try {
    const response = await axios.get(
      `${URLConstants.COURSES_PATH}/${courseId}/topics`
    );

    if (response) {
      const { data } = response;

      return data;
    }
  } catch (e) {
    throw e;
  }
};

export { getTopics, getTopicsByCourseId };
