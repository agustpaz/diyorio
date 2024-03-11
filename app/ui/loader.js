// components/Loader.js
import React from 'react';
import styles from './home/loader.module.css';

const Loader = ({ isLoading }) => {
  return (
    <div className={`${styles.loader} ${isLoading ? styles.show : ''}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;