import { useContext, useEffect, useState } from 'react';

import { CoursesContext } from '../store/courses-context';
import { getCourses } from '../service/courses-service';
import DataTable from '../components/table';

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
  const { courses, setCourses } = useContext(CoursesContext);

  useEffect(() => {
    const getCoursesData = async () => {
      const courses = await getCourses();
      setCourses(courses);
    };

    getCoursesData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={courses}
      rowKey={(record) => record.course_id}
    />
  );
};

export default Courses;
