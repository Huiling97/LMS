import { useEffect } from 'react';

import DataTable from '../components/table';
import { getEnrollments } from '../service/enrollments-service';
import { useEnrollmentsContext } from '../store/enrollments-context';

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
  const { state, setState } = useEnrollmentsContext();

  useEffect(() => {
    const getEnrollmentsData = async () => {
      const enrollments = await getEnrollments();
      setState(enrollments);
    };

    getEnrollmentsData();
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
