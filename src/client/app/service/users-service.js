import axios from 'axios';
import URLConstants from '../util/url-constants';

const getUsers = async () => {
  try {
    const response = await axios.get(`${URLConstants.USERS_PATH}/all`);

    if (response) {
      const { data } = response;

      return data;
    }
  } catch (e) {
    throw e;
  }
};

export { getUsers };
