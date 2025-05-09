import { createContext, useReducer, useContext } from 'react';

export const genericContext = (defaultState = []) => {
  const Context = createContext({
    state: defaultState,
    setState: () => {},
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET':
        return action.payload;
      default:
        return state;
    }
  };

  const GenericProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const setState = (newState) => {
      dispatch({ type: 'SET', payload: newState });
    };

    return (
      <Context.Provider value={{ state, setState }}>
        {children}
      </Context.Provider>
    );
  };

  const useGenericContext = () => useContext(Context);

  return [GenericProvider, useGenericContext];
};
