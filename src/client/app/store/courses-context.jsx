import { createContext, useContext, useReducer } from 'react';

const CoursesContext = createContext();

const useCourses = () => useContext(CoursesContext);

const coursesReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
    case 'SET_COURSE_TOPICS':
      return action.payload;
    default:
      return state;
  }
};

const CoursesContextProvider = ({ children }) => {
  const [coursesState, dispatch] = useReducer(coursesReducer, []);

  const getSelectedCourse = (id) => {
    return coursesState.find(({ course_id }) => course_id === Number(id));
  };

  const setCourses = (courses) => {
    dispatch({ type: 'SET', payload: courses });
  };

  const setCourseTopics = (courses) => {
    dispatch({ type: 'SET_COURSE_TOPICS', payload: courses });
  };

  const value = {
    courses: coursesState,
    getSelectedCourse,
    setCourses,
    setCourseTopics,
  };

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};

export { CoursesContextProvider, useCourses };
