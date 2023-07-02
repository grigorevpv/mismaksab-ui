import React, {useRef, useState, useCallback} from 'react';
import styles from './../scss/Header.module.css';
import languageSvg from './../../../assets/icons/language.svg';
import classnames from 'classnames';
import useOutsideClick from '../../../hooks/useOutsideClick';

const LANGUAGES = ['rus', 'est', 'eng'];

export default function Language() {
  const current = LANGUAGES[0];
  const [activeSelection, setActiveSelection] = useState(false);

  // detect click
  const wrapperRef = useRef(null);
  useOutsideClick(
    wrapperRef, // ref element
    () => setActiveSelection(false) // callback function
  );

  // set active language callback
  const setActiveCallback = useCallback(() => {
    setActiveSelection(!activeSelection);
  }, [activeSelection]);

  return (
    <div ref={wrapperRef} className={styles.language}>
      <ActiveLanguage
        onClick={setActiveCallback} //useCallback
        selection={activeSelection}
        current={current}
      />
      
      <AllLanguages
        languages={LANGUAGES}
        active={activeSelection}
        current={current}
      />
    </div>
  )
}

function ActiveLanguage({onClick, selection, current}) {
  return (
    <div className={styles.languageCurrent} onClick={onClick}>
      <span className={styles.languageCurrentLang}>{current}</span>

      <div className={classnames(styles.svg, {
        [styles.rotate]: selection
      })}>
        <img src={languageSvg} alt='language svg'/>
      </div>
    </div>
  )
}

function AllLanguages({languages, active, current}) {
  // remove current lang from all languages array
  const otherLangs = languages.filter(lang => lang !== current);

  const languagesOrder = [current, ...otherLangs]
  console.log(languagesOrder);

  return (
    <div className={classnames(styles.languageAll, {
      [styles.shown]: active
    })}>

      {languagesOrder.map(lang =>
        <a key={lang} href='/'>
          <div className={classnames(styles.languageAllLang, {
            [styles.languageAllLangActive]: lang === current
          })}>
            {lang}
          </div>
        </a>
      )}
      
    </div>
  )
}

