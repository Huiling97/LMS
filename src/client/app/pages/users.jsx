import { useEffect } from 'react';

import DataTable from '../components/table';
import { getUsers } from '../service/users-service';
import { useUsersContext } from '../store/users-context';

const columns = [
  {
    title: 'User ID',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: 'User Name',
    dataIndex: 'user_name',
    key: 'user_name',
  },
  {
    title: 'Deleted At',
    dataIndex: 'user_deleted_at',
    key: 'user_deleted_at',
  },
  {
    title: 'User Status',
    dataIndex: 'user_state',
    key: 'user_state',
  },
];

const Users = () => {
  const { state, setState } = useUsersContext();

  useEffect(() => {
    const getUsersData = async () => {
      const users = await getUsers();
      setState(users);
    };

    getUsersData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={state}
      rowKey={(record) => record.user_id}
    />
  );
};

export default Users;
