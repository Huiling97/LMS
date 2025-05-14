import axios from 'axios';
import URLConstants from '../../../shared/util/url-constants';

const getCourses = async () => {
  try {
    const response = await axios.get(`${URLConstants.COURSES_PATH}/all`);

    if (response) {
      const { data } = response;

      return data;
    }
  } catch (e) {
    throw e;
  }
};

export { getCourses };
