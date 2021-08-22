import React, { useRef } from 'react';
import classnames from 'classnames';
import { useSize } from 'ahooks';
import Canvas from './components/canvas';
import styles from './index.less';

const CanvasWrapper = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  return (
    <div
      className={classnames(
        'flex flex-1 text-white bg-gray-900 min-w-max',
        styles.wrapper,
      )}
      ref={ref}
    >
      <Canvas WrapperSize={size} />
    </div>
  );
};

export default CanvasWrapper;
