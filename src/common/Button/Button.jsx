import React from 'react';
import styles from './Button.module.css';

export default function Button({mode, children}) {
  return (
    <button className={
        [styles.button, styles[mode]].join(' ')
    }>
        {children}
    </button>
  )
}
