import { createContext, useContext, useReducer } from 'react';

const TopicsContext = createContext();

const useTopics = () => useContext(TopicsContext);

const topicsReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
    case 'SET_TOPIC_ENTRIES':
      return action.payload;
    default:
      return state;
  }
};

const TopicsContextProvider = ({ children }) => {
  const [topicsState, dispatch] = useReducer(topicsReducer, []);

  const getSelectedTopic = (id) => {
    return topicsState.find(({ topic_id }) => topic_id === Number(id));
  };

  const setTopics = (topics) => {
    dispatch({ type: 'SET', payload: topics });
  };

  const setTopicEntries = (topics) => {
    dispatch({ type: 'SET_TOPIC_ENTRIES', payload: topics });
  };

  const value = {
    topics: topicsState,
    getSelectedTopic,
    setTopics,
    setTopicEntries,
  };

  return (
    <TopicsContext.Provider value={value}>{children}</TopicsContext.Provider>
  );
};

export { TopicsContextProvider, useTopics };
