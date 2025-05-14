import { Breadcrumb } from 'antd';
import { Link, useLocation, useParams } from 'react-router-dom';

const ROUTE_TITLES = {
  courses: 'Courses',
  topics: 'Topics',
  entries: 'Entries',
  users: 'Users',
  enrollments: 'Enrollments',
  logins: 'Login Data',
};

const getFullPath = ({ snippet, courseId, topicId, fallback }) => {
  switch (snippet) {
    case 'topics':
      return courseId ? `/courses/${courseId}/topics` : fallback;
    case 'entries':
      return courseId && topicId
        ? `/courses/${courseId}/topics/${topicId}/entries`
        : fallback;
    default:
      return fallback;
  }
};

const Breadcrumbs = () => {
  const location = useLocation();
  const { courseId, topicId } = useParams();

  const pathSnippets = location.pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSnippets.reduce(
    ({ items, path }, snippet) => {
      // skip numeric IDs in url
      if (!isNaN(snippet)) return { items, path };

      const nextPath = `${path}/${snippet}`;
      const fullPath = getFullPath({
        snippet,
        courseId,
        topicId,
        fallback: nextPath,
      });

      const title = ROUTE_TITLES[snippet] || snippet;
      const breadcrumb = { title: <Link to={fullPath}>{title}</Link> };

      return {
        path: nextPath,
        items: [...items, breadcrumb],
      };
    },
    { items: [], path: '' }
  ).items;

  return <Breadcrumb className='breadcrumb-wrapper' items={breadcrumbs} />;
};

export default Breadcrumbs;
