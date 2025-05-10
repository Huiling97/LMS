import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DataTable from '../components/table';
import { getCourses } from '../service/courses-service';
import { CoursesContext } from '../store/courses-context';

const Courses = () => {
  const navigate = useNavigate();
  const { courses, setCourses } = useContext(CoursesContext);

  const columns = [
    {
      title: 'Course ID',
      dataIndex: 'course_id',
      key: 'course_id',
      render: (text, { course_id }) => (
        <a href='#' onClick={() => navigate(`/courses/${course_id}/topics`)}>
          {text}
        </a>
      ),
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
      rowKey={({ course_id }) => course_id}
    />
  );
};

export default Courses;
