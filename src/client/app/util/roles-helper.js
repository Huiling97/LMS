import { useAuth } from '../store/auth-context';

const getRole = () => {
  const {
    user: { role },
  } = useAuth();

  return role;
};

const isAdmin = () => getRole() === 'admin';

const isInstructor = () => getRole() === 'instructor';

export { isAdmin, isInstructor };
