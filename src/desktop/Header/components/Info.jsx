import React, { useCallback, useRef, useState } from 'react';
import styles from './../scss/Header.module.css';
import useOutsideClick from '../../../hooks/useOutsideClick';
import classnames from 'classnames';

export default function Info({infoText}) {
  // detect click
  const [activeInfo, setActiveInfo] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideClick(
    wrapperRef, // ref element
    () => setActiveInfo(false) // callback function
  );

  const setActiveCallback = useCallback(() => {
    setActiveInfo(!activeInfo);
  }, [activeInfo]);

  return (
    <div ref={wrapperRef} className={styles.info}>
      <span className={styles.infoText} onClick={setActiveCallback}>i</span>

      <div className={classnames(styles.infoBlock, {
        [styles.shown]: activeInfo
      })}>
        {infoText}
      </div>
    </div>
  )
}
