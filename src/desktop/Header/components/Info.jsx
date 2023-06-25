import React from 'react';
import styles from './../scss/Header.module.css';

export default function Info() {
  return (
    <div className={styles.info}>
      <a className={styles.infoText} href='/' title='О нас'>i</a>
    </div>
  )
}
