import { useEffect } from 'react';

import DataTable from '../components/table';
import { getCourses } from '../service/courses-service';
import { useCoursesContext } from '../store/courses-context';

const columns = [
  {
    title: 'Course ID',
    dataIndex: 'course_id',
    key: 'course_id',
  },
  {
    title: 'Course Code',
    dataIndex: 'course_code',
    key: 'course_code',
  },
  {
    title: 'Course Name',
    dataIndex: 'course_name',
    key: 'course_name',
  },
  {
    title: 'Semester',
    dataIndex: 'semester',
    key: 'semester',
  },
  {
    title: 'Created At',
    dataIndex: 'course_created_at',
    key: 'course_created_at',
  },
];

const Courses = () => {
  const { state, setState } = useCoursesContext();

  useEffect(() => {
    const getCoursesData = async () => {
      const courses = await getCourses();
      setState(courses);
    };

    getCoursesData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={state}
      rowKey={(record) => record.course_id}
    />
  );
};

export default Courses;
