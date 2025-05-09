import { createContext, useReducer } from 'react';

const CoursesContext = createContext({
  courses: [],
  setCourses: () => {},
});

const coursesReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    default:
      return state;
  }
};

const CoursesContextProvider = ({ children }) => {
  const [coursesState, dispatch] = useReducer(coursesReducer, []);

  const setCourses = (courses) => {
    dispatch({ type: 'SET', payload: courses });
  };

  const value = {
    courses: coursesState,
    setCourses,
  };

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesContextProvider };
