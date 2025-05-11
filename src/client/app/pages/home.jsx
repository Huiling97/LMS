import { useContext } from 'react';

import CardContent from '../components/card';
import { AuthContext } from '../store/auth-context';

const COURSES_INFO = [
  { cardTitle: 'Web Development', cardContent: 'Topics: 112098, 122020' },
  {
    cardTitle: 'Introductionn to Artificial Intelligece',
    cardContent: 'Topics: 98124, 30017',
  },
];

const SUBSCRIBED_TOPICS_INFO = [
  {
    cardTitle: 'How to start a server',
    cardContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    cardTitle: 'What are webhooks',
    cardContent:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
  },
];

const Home = () => {
  const {
    user: { username = '' },
  } = useContext(AuthContext);

  return (
    <>
      <h1>Welcome, {username}!</h1>
      <div className='home-content-wrapper'>
        <CardContent mainTitle={'Your Courses'} data={COURSES_INFO} />
        <CardContent
          mainTitle={'Your Subscribed Topics'}
          data={SUBSCRIBED_TOPICS_INFO}
        />
      </div>
    </>
  );
};

export default Home;
