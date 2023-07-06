import React from 'react';
import cn from 'classnames';
import styles from './Button.scss';

interface Props {
  mode: "button" | "yellow",
  children: React.ReactNode,
}

export function Button({mode, children}: Props) {
  return (
    <button className={cn(styles.button, styles[mode])}>
        {children}
    </button>
  )
}