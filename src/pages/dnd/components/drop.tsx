import React, { CSSProperties } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';

const style: CSSProperties = {
  width: 400,
  height: 400,
  margin: '100px auto',
  lineHeight: '60px',
  border: '1px dashed black',
};

const Drop: React.FC = () => {
  const [collectProps, droper] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 item 的 type 值一致，否则不能感应
    accept: 'test-drag',
    // collect 函数，返回的对象会成为 useDrop 的第一个参数，可以在组件中直接进行使用
    collect: (minoter: DropTargetMonitor) => ({
      isOver: minoter.isOver(),
    }),
  });
  const bg = collectProps.isOver ? 'lightblue' : 'white';
  const content = collectProps.isOver
    ? '快松开，放到碗里来'
    : '将 Box 组件拖动到这里';
  return (
    // 将 droper 赋值给对应元素的 ref
    <div ref={droper} style={{ ...style, background: bg }}>
      {content}
    </div>
  );
};

export default Drop;
