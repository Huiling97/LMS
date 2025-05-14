import { useEffect } from 'react';

import DataTable from '../components/table';
import { getUsers } from '../service/users-service';
import { useError } from '../store/error-context';
import { useUsers } from '../store/users-context';

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
  const { clearError, setError } = useError();
  const { state, setState } = useUsers();

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const users = await getUsers();

        setState(users);
        clearError();
      } catch (e) {
        setError('Failed to fetch users data');
      }
    };

    getUsersData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={state}
      rowKey={({ user_id }) => user_id}
    />
  );
};

export default Users;
