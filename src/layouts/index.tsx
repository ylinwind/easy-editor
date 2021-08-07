import React from 'react';
import { StoreProvider } from '@/stores/index';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <StoreProvider>
      <div className={styles.normal}>{props.children}</div>
    </StoreProvider>
  );
};

export default BasicLayout;
