import React from 'react';
import { useDrag } from 'react-dnd';

const Drag: React.FC = () => {
  const [collected, dragger, dragPreview] = useDrag(() => ({
    type: 'test-drag',
    item: { id: '123' },
  }));
  return (
    // 将第二个参数赋值给 ref
    <div ref={dragger} style={{ padding: 20, border: '1px solid' }}>
      可拖拽组件 Box
    </div>
  );
};

export default Drag;
