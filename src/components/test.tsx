import React from 'react';
import { useMount } from 'ahooks';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores';

const Test = () => {
  useMount(() => {
    console.log('ahooks mount');
  });
  let { counterStore } = useStore();
  const { onIncrement, onDecrement } = counterStore;
  return (
    <div>
      <p className="text-red-500">林大大</p>
      <p>number - {counterStore.counter}</p>
      <p className="cursor-pointer" onClick={onIncrement}>
        add +
      </p>
      <p className="cursor-pointer" onClick={onDecrement}>
        minus -
      </p>
    </div>
  );
};

export default observer(Test);
