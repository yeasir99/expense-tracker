import React, { useReducer, createContext, useContext } from 'react';

import reducer from './trackerReducer';

const trackerContext = createContext();

trackerContext.displayName = 'TrackerContext';

export const useTracker = () => {
  const context = useContext(trackerContext);
  if (!context) {
    throw new Error('useTracker must be use with in <TrackerState />');
  }
  return context;
};

export const TrackerState = props => {
  const [state, dispatch] = useReducer(reducer, {
    transections: [],
    income: 0,
    expense: 0,
    balance: 0,
  });

  return <trackerContext.Provider value={[state, dispatch]} {...props} />;
};

// {
//   balance,
//   income,
//   expense,
//   transections,
//   addTransection,
//   countBalance,
//   removeTransection,
// }
