import { Breadcrumb } from 'antd';
import { Link, useLocation, useParams } from 'react-router-dom';

const routeLabelMap = {
  courses: 'Courses',
  topics: 'Topics',
  entries: 'Entries',
  users: 'Users',
  enrollments: 'Enrollments',
  logins: 'Login Data',
};

const getFullPath = ({ snippet, courseId, topicId, fallbackPath }) => {
  if (snippet === 'topics' && courseId) {
    return `/courses/${courseId}/topics`;
  }

  if (snippet === 'entries' && courseId && topicId) {
    return `/courses/${courseId}/topics/${topicId}/entries`;
  }

  return fallbackPath;
};

const Breadcrumbs = () => {
  const location = useLocation();
  const { courseId, topicId } = useParams();

  const pathSnippets = location.pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSnippets.reduce(
    ({ items, path }, snippet) => {
      if (!isNaN(snippet)) return { items, path };

      const nextPath = `${path}/${snippet}`;
      const fullPath = getFullPath({
        snippet,
        courseId,
        topicId,
        fallbackPath: nextPath,
      });
      const title = routeLabelMap[snippet] || snippet;

      return {
        path: nextPath,
        items: [...items, { title: <Link to={fullPath}>{title}</Link> }],
      };
    },
    { items: [], path: '' }
  ).items;

  return <Breadcrumb className='breadcrumb-wrapper' items={breadcrumbs} />;
};

export default Breadcrumbs;
