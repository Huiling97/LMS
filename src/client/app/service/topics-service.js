import axios from 'axios';
import URLConstants from '../util/url-constants';

const getTopics = async () => {
  try {
    const response = await axios.get(`${URLConstants.TOPCIS_PATH}/all`);

    if (response) {
      const { data } = response;

      return data;
    }
  } catch (e) {
    throw e;
  }
};

export { getTopics };
