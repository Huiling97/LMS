import { useEffect } from 'react';

import DataTable from '../components/table';
import { getEnrollments } from '../service/enrollments-service';
import { useEnrollments } from '../store/enrollments-context';
import { useError } from '../store/error-context';

const columns = [
  {
    title: 'User ID',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: 'Course ID',
    dataIndex: 'course_id',
    key: 'course_id',
  },
  {
    title: 'Enrollment Type',
    dataIndex: 'enrollment_type',
    key: 'enrollment_type',
  },
  {
    title: 'Enrollment Status',
    dataIndex: 'enrollment_state',
    key: 'enrollment_state',
  },
];

const Enrollments = () => {
  const { state, setState } = useEnrollments();
  const { clearError, setError } = useError();

  useEffect(() => {
    const getEnrollmentsData = async () => {
      try {
        const enrollments = await getEnrollments();

        setState(enrollments);
        clearError();
      } catch (e) {
        setError('Failed to fetch enrollments data');
      }
    };

    getEnrollmentsData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={state}
      rowKey={({ user_id }) => user_id}
    />
  );
};

export default Enrollments;
