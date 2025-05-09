import { Routes, Route } from 'react-router-dom';
import './App.css';

import Courses from './app/pages/courses';
import Enrollments from './app/pages/enrollments';
import Entries from './app/pages/entries';
import Home from './app/pages/home';
import Logins from './app/pages/logins';
import Topics from './app/pages/topics';
import Users from './app/pages/users';
import AllProviders from './app/store';

const App = () => (
  <AllProviders>
    <Routes>
      <Route path='/*' element={<Home />}>
        <Route path='courses' element={<Courses />} />
        <Route path='users' element={<Users />} />
        <Route path='enrollments' element={<Enrollments />} />
        <Route path='logins' element={<Logins />} />
        <Route path='topics' element={<Topics />} />
        <Route path='topics/entries' element={<Entries />} />
      </Route>
    </Routes>
  </AllProviders>
);

export default App;
