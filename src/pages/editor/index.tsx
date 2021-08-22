import React from 'react';
import classnames from 'classnames';
import styles from './index.less';
import Settings from '@editorComponents/settings';
import Widgets from '@editorComponents/widgets';
import Canvas from '@editorComponents/canvas';

const Editor = () => {
  return (
    <div className={classnames(styles.wrapper, 'flex h-full')}>
      <Widgets />
      <Canvas />
      <Settings />
    </div>
  );
};

export default Editor;
