import { AuthProvider } from './auth-context';
import { CoursesContextProvider } from './courses-context';
import { EnrollmentsContextProvider } from './enrollments-context';
import { EntriesContextProvider } from './entries-context';
import { ErrorProvider } from './error-context';
import { LoginsContextProvider } from './logins-context';
import { TopicsContextProvider } from './topics-context';
import { UsersContextProvider } from './users-context';

const AllProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ErrorProvider>
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
      </ErrorProvider>
    </AuthProvider>
  );
};

export default AllProviders;
