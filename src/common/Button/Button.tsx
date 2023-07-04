import React from 'react';
import classnames from 'classnames';
import styles from './Button.scss';

interface Props {
  mode: string,
  children: React.ReactElement,
}

export default function Button({mode, children}: Props) {
  return (
    <button className={classnames(styles.button, styles[mode])}>
        {children}
    </button>
  )
}