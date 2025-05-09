import { useEffect } from 'react';

import DataTable from '../components/table';
import { getTopics } from '../service/topics-service';
import { useTopicsContext } from '../store/topics-context';

const columns = [
  {
    title: 'Topic ID',
    dataIndex: 'topic_id',
    key: 'topic_id',
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
  const { state, setState } = useTopicsContext();

  useEffect(() => {
    const getTopicsData = async () => {
      const topics = await getTopics();
      setState(topics);
    };

    getTopicsData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={state}
      rowKey={(record) => record.topic_id}
    />
  );
};

export default Topics;
