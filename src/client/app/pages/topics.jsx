import { useContext, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Divider } from 'antd';

import DataTable from '../components/table';
import { getTopics, getTopicsByCourseId } from '../service/topics-service';
import { CoursesContext } from '../store/courses-context';
import { useError } from '../store/error-context';
import { TopicsContext } from '../store/topics-context';

const getTopicColumns = (navigate) => [
  {
    title: 'Topic ID',
    dataIndex: 'topic_id',
    key: 'topic_id',
    render: (text, { course_id, topic_id }) => (
      <a
        onClick={() =>
          navigate(`/courses/${course_id}/topics/${topic_id}/entries`)
        }
      >
        {text}
      </a>
    ),
  },
  {
    title: 'Topic Title',
    dataIndex: 'topic_title',
    key: 'topic_title',
  },
  {
    title: 'Topic Content',
    dataIndex: 'topic_content',
    key: 'topic_content',
  },
  {
    title: 'Created At',
    dataIndex: 'topic_created_at',
    key: 'topic_created_at',
  },
  {
    title: 'Deleted At',
    dataIndex: 'topic_deleted_at',
    key: 'topic_deleted_at',
  },
  {
    title: 'Topic Status',
    dataIndex: 'topic_state',
    key: 'topic_state',
  },
  {
    title: 'Course ID',
    dataIndex: 'course_id',
    key: 'course_id',
  },
  {
    title: 'Created By',
    dataIndex: 'topic_posted_by_user_id',
    key: 'topic_posted_by_user_id',
  },
];

const Topics = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const { getSelectedCourse } = useContext(CoursesContext);
  const { topics, setTopics } = useContext(TopicsContext);
  const { clearError, setError } = useError();

  const columns = useMemo(() => getTopicColumns(navigate), [navigate]);
  const courseName = getSelectedCourse(courseId)?.course_name;

  const displayHeader = (courseName, courseId) => {
    return (
      <>
        <h1>Course Name: {courseName}</h1>
        <h2>Course ID: {courseId}</h2>
        <Divider />
        <h5>
          Topics for {courseName}, {courseId}
        </h5>
      </>
    );
  };

  useEffect(() => {
    const getTopicsData = async () => {
      try {
        const topics = courseId
          ? await getTopicsByCourseId(courseId)
          : await getTopics();

        setTopics(topics);
        clearError();
      } catch (e) {
        setError('Failed to fetch topics data');
      }
    };

    getTopicsData();
  }, [navigate]);

  return (
    <>
      {courseName && courseId && displayHeader(courseName, courseId)}
      <DataTable
        columns={columns}
        data={topics}
        rowKey={(record) => record.topic_id}
      />
    </>
  );
};

export default Topics;
