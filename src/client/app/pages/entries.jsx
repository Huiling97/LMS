import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Divider } from 'antd';

import DataTable from '../components/table';
import { getEntries, getEntriesByTopicId } from '../service/entries-service';
import { useEntriesContext } from '../store/entries-context';
import { useError } from '../store/error-context';
import { TopicsContext } from '../store/topics-context';

const columns = [
  {
    title: 'Entry ID',
    dataIndex: 'entry_id',
    key: 'entry_id',
  },
  {
    title: 'Entry Content',
    dataIndex: 'entry_content',
    key: 'entry_content',
  },
  {
    title: 'Created At',
    dataIndex: 'entry_created_at',
    key: 'entry_created_at',
  },
  {
    title: 'Deleted At',
    dataIndex: 'entry_deleted_at',
    key: 'entry_deleted_at',
  },
  {
    title: 'Entry Status',
    dataIndex: 'entry_state',
    key: 'entry_state',
  },
  {
    title: 'Entry Parent ID',
    dataIndex: 'entry_parent_id',
    key: 'entry_parent_id',
  },
  {
    title: 'Posted By',
    dataIndex: 'entry_posted_by_user_id',
    key: 'entry_posted_by_user_id',
  },
  {
    title: 'Topic ID',
    dataIndex: 'topic_id',
    key: 'topic_id',
  },
];

const Entries = () => {
  const navigate = useNavigate();
  const { courseId, topicId } = useParams();
  const { getSelectedTopic } = useContext(TopicsContext);
  const { state, setState } = useEntriesContext();
  const { clearError, setError } = useError();

  const topicTitle = getSelectedTopic(topicId)?.topic_title;

  const displayHeader = (topicTitle, topicId) => {
    return (
      <>
        <h1>Topic Title: {topicTitle}</h1>
        <h2>Topic ID: {topicId}</h2>
        <Divider />
        <h5>
          Entries for {topicTitle}, {topicId}
        </h5>
      </>
    );
  };

  useEffect(() => {
    const getEntriesData = async () => {
      try {
        const entries =
          courseId && topicId
            ? await getEntriesByTopicId(courseId, topicId)
            : await getEntries();

        setState(entries);
        clearError();
      } catch (e) {
        setError('Failed to fetch entries data');
      }
    };

    getEntriesData();
  }, [navigate]);

  return (
    <>
      {topicTitle && topicId && displayHeader(topicTitle, topicId)}
      <DataTable
        columns={columns}
        data={state}
        rowKey={(record) => record.entry_id}
      />
    </>
  );
};

export default Entries;
