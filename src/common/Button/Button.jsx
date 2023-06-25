import React from 'react';
import styles from './scss/Button.module.css';
import classnames from 'classnames';

export default function Button({mode, children}) {
  return (
    <button className={classnames(styles.button, styles[mode])}>
        {children}
    </button>
  )
}
