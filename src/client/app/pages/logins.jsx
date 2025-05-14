import { useEffect } from 'react';

import DataTable from '../components/table';
import { getLogins } from '../service/logins-service';
import { useLogins } from '../store/logins-context';
import { useError } from '../store/error-context';

const columns = [
  {
    title: 'User ID',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: 'User Login ID',
    dataIndex: 'user_login_id',
    key: 'user_login_id',
  },
];

const Logins = () => {
  const { clearError, setError } = useError();
  const { state, setState } = useLogins();

  useEffect(() => {
    const getLoginsData = async () => {
      try {
        const logins = await getLogins();

        setState(logins);
        clearError();
      } catch (e) {
        setError('Failed to fetch logins data');
      }
    };

    getLoginsData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={state}
      rowKey={({ user_id }) => user_id}
    />
  );
};

export default Logins;
