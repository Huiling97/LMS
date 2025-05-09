import './App.css';

import { Routes, Route } from 'react-router-dom';
import Courses from './app/pages/courses';
import Home from './app/pages/home';
import AllProviders from './app/store';

const App = () => (
  <AllProviders>
    <Routes>
      <Route path='/*' element={<Home />}>
        <Route path='courses' element={<Courses />} />
      </Route>
    </Routes>
  </AllProviders>
);

export default App;
