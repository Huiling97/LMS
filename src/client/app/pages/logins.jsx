import { useEffect } from 'react';

import DataTable from '../components/table';
import { getLogins } from '../service/logins-service';
import { useLoginsContext } from '../store/logins-context';

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

const Enrollments = () => {
  const { state, setState } = useLoginsContext();

  useEffect(() => {
    const getLoginsData = async () => {
      const logins = await getLogins();
      setState(logins);
    };

    getLoginsData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={state}
      rowKey={(record) => record.user_id}
    />
  );
};

export default Enrollments;
