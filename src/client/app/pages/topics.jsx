import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import DataTable from '../components/table';
import { getTopics, getTopicsByCourseId } from '../service/topics-service';
import { CoursesContext } from '../store/courses-context';
import { TopicsContext } from '../store/topics-context';

const Topics = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const { getSelectedCourse } = useContext(CoursesContext);
  const { topics, setTopics } = useContext(TopicsContext);

  const columns = [
    {
      title: 'Topic ID',
      dataIndex: 'topic_id',
      key: 'topic_id',
      render: (text, { course_id, topic_id }) => (
        <a
          href='#'
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

  useEffect(() => {
    const getTopicsData = async () => {
      const topics = courseId
        ? await getTopicsByCourseId(courseId)
        : await getTopics();

      setTopics(topics);
    };

    getTopicsData();
  }, []);

  return (
    <>
      <h1>Course Name: {getSelectedCourse(courseId)?.course_name}</h1>
      <h2>Course ID: {courseId}</h2>
      <DataTable
        columns={columns}
        data={topics}
        rowKey={(record) => record.topic_id}
      />
    </>
  );
};

export default Topics;
