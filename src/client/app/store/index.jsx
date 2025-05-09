import { CoursesContextProvider } from './courses-context';
import { EnrollmentsContextProvider } from './enrollments-context';
import { EntriesContextProvider } from './entries-context';
import { LoginsContextProvider } from './logins-context';
import { TopicsContextProvider } from './topics-context';
import { UsersContextProvider } from './users-context';

const AllProviders = ({ children }) => {
  return (
    <UsersContextProvider>
      <EnrollmentsContextProvider>
        <LoginsContextProvider>
          <TopicsContextProvider>
            <EntriesContextProvider>
              <CoursesContextProvider>{children}</CoursesContextProvider>
            </EntriesContextProvider>
          </TopicsContextProvider>
        </LoginsContextProvider>
      </EnrollmentsContextProvider>
    </UsersContextProvider>
  );
};

export default AllProviders;
