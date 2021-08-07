import CounterStore from './test';

export function createStore() {
  return {
    counterStore : CounterStore(),
  }
}

export type TStore = ReturnType<typeof createStore>;