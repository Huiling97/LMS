import { useAuth } from '../store/auth-context';

const isInstructor = () => {
  const {
    user: { role },
  } = useAuth();

  return role === 'instructor';
};

export { isInstructor };
