import { useAuth } from '../store/auth-context';

const isAdmin = () => {
  const {
    user: { role },
  } = useAuth();

  return role === 'admin';
};

const isInstructor = () => {
  const {
    user: { role },
  } = useAuth();

  return role === 'instructor';
};

export { isAdmin, isInstructor };
