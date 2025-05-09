import axios from 'axios';
import URLConstants from '../util/url-constants';

const getLogins = async () => {
  try {
    const response = await axios.get(`${URLConstants.LOGINS_PATH}/all`);

    if (response) {
      const { data } = response;

      return data;
    }
  } catch (e) {
    throw e;
  }
};

export { getLogins };
