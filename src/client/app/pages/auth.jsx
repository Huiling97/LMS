import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../store/auth-context';

const Auth = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to='/login' />;
};

export default Auth;
