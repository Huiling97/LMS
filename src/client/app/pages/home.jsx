import CardContent from '../components/card';
import { useAuth } from '../store/auth-context';
import { isAdmin, isInstructor } from '../util/roles-helper';

const MANAGEMENT_ACTIONS = [
  {
    cardTitle: 'Manage instructors',
    cardContent: 'User ID: 40314, Time: 14/05/25, 1:33 PM',
  },
  {
    cardTitle: 'Generate reports',
    cardContent: 'Total: 29',
  },
];

const COURSES_INFO = [
  { cardTitle: 'Web Development', cardContent: 'Topics: 112098, 122020' },
  {
    cardTitle: 'Introductionn to Artificial Intelligece',
    cardContent: 'Topics: 98124, 30017',
  },
];

const LOGIN_INFO = [
  {
    cardTitle: 'Recent login activity',
    cardContent: 'User ID: 40314, Time: 14/05/25, 1:33 PM',
  },
  {
    cardTitle: 'Active users today',
    cardContent: 'Total: 29',
  },
  {
    cardTitle: 'Failed login attempts',
    cardContent: 'Total: 11',
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
  } = useAuth();

  const displayAdminDetails = () => {
    return (
      <>
        <CardContent mainTitle={'Login Activity'} data={LOGIN_INFO} />
        <CardContent
          mainTitle={'Management Actions'}
          data={MANAGEMENT_ACTIONS}
        />
      </>
    );
  };

  const displayInstructorDetails = () => {
    return (
      <>
        <CardContent mainTitle={'Your Courses'} data={COURSES_INFO} />
        <CardContent
          mainTitle={'Your Subscribed Topics'}
          data={SUBSCRIBED_TOPICS_INFO}
        />
      </>
    );
  };

  return (
    <>
      <h1>Welcome, {username}!</h1>
      <div className='home-content-wrapper'>
        {isAdmin() && displayAdminDetails()}
        {isInstructor() && displayInstructorDetails()}
      </div>
    </>
  );
};

export default Home;
