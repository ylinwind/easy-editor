import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Drag from './components/drag';
import Drop from './components/drop';
import styles from './index.less';

const Dnd = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wrap}>
        <Drag />
      </div>
      <div style={{ marginTop: 100, padding: 20, border: '1px solid' }}>
        <Drop />
      </div>
    </DndProvider>
  );
};

export default Dnd;
