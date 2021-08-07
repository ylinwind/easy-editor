import * as React from 'react';
import { createStore, TStore } from './config';

export const StoreContext = React.createContext<TStore | null>(null);

export const StoreProvider = ({ children }: any) => {
  const store = createStore();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('You have forgot to use StoreProvider.');
  }
  return store;
};
