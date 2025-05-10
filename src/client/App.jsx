import { Routes, Route } from 'react-router-dom';
import './App.css';

import Auth from './app/pages/auth';
import Courses from './app/pages/courses';
import Enrollments from './app/pages/enrollments';
import Entries from './app/pages/entries';
import Home from './app/pages/home';
import Login from './app/pages/login';
import Logins from './app/pages/logins';
import Topics from './app/pages/topics';
import Users from './app/pages/users';
import AllProviders from './app/store';

const App = () => (
  <AllProviders>
    <div className='full-height-layout'>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route
          path='/*'
          element={
            <Auth>
              <Home />
            </Auth>
          }
        >
          <Route path='courses' element={<Courses />} />
          <Route path='users' element={<Users />} />
          <Route path='enrollments' element={<Enrollments />} />
          <Route path='logins' element={<Logins />} />
          <Route path='topics' element={<Topics />} />
          <Route path='topics/entries' element={<Entries />} />
        </Route>
      </Routes>
    </div>
  </AllProviders>
);

export default App;
