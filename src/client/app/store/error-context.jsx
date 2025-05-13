import { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

const useError = () => useContext(ErrorContext);

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider, useError };
