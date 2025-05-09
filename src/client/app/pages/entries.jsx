import { useEffect } from 'react';

import DataTable from '../components/table';
import { getEntries } from '../service/entries-service';
import { useEntriesContext } from '../store/entries-context';

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
  const { state, setState } = useEntriesContext();

  useEffect(() => {
    const getEntriesData = async () => {
      const entries = await getEntries();
      setState(entries);
    };

    getEntriesData();
  }, []);

  return (
    <DataTable
      columns={columns}
      data={state}
      rowKey={(record) => record.entry_id}
    />
  );
};

export default Entries;
