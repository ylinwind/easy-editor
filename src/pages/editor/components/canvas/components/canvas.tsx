import React from 'react';
import { useCreation } from 'ahooks';

type CanvasProps = {
  WrapperSize: any;
  showRatio?: number;
};
const CanvasSize = { width: 400, height: 400 };
const Canvas = (props: CanvasProps) => {
  const { WrapperSize, showRatio = 0.9 } = props;

  const scale = useCreation(() => {
    let ratio = Math.min(
      Number(((WrapperSize.width / CanvasSize.width) * showRatio).toFixed(2)),
      Number(((WrapperSize.height / CanvasSize.height) * showRatio).toFixed(2)),
    );
    return ratio;
  }, [WrapperSize, CanvasSize]);

  return (
    <div
      className="absolute origin-top-left transform bg-gray-300 left-1/2 top-1/2"
      style={{
        ...CanvasSize,
        transform: `scale(${scale}) translate(-50%,-50%)`,
      }}
    >
      main drawing
    </div>
  );
};

export default Canvas;
