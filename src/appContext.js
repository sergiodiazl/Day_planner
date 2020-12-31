import React   from 'react';

import moment from 'moment';

const contextValue = {
  month: moment(),
  setMonth: (m) => (contextValue.month = m),
  selectedDay: moment().startOf('day'),
  setSelectedDay: (d) => (contextValue.selectedDay = d),
  tasks: {},
  setTasks: (t) => (contextValue.tasks = t),
};

export const AppContext = React.createContext(contextValue);

export const AppContextProvider=AppContext.Provider
export const AppContextConsumer=AppContext.Consumer