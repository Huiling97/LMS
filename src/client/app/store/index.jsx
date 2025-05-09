import { CoursesContextProvider } from './courses-context';
import { EnrollmentsContextProvider } from './enrollments-context';
import { LoginsContextProvider } from './logins-context';
import { UsersContextProvider } from './users-context';

const AllProviders = ({ children }) => {
  return (
    <UsersContextProvider>
      <EnrollmentsContextProvider>
        <LoginsContextProvider>
          <CoursesContextProvider>{children}</CoursesContextProvider>
        </LoginsContextProvider>
      </EnrollmentsContextProvider>
    </UsersContextProvider>
  );
};

export default AllProviders;
