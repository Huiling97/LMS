import { Navigate } from 'react-router-dom';

import { useAuth } from '../store/auth-context';

const Auth = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to='/login' />;
};

export default Auth;
