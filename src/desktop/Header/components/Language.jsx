import React, {useRef, useState, useEffect} from 'react';
import styles from './../Header.module.css'

const languages = ['rus', 'est', 'en'];

export default function Language() {
  const current = languages[0];
  const [activeSelection, setActiveSelection] = useState(false);

  // detect click
  const wrapperRef = useRef(null);
  useOutsideClick(
    wrapperRef, // ref element
    () => setActiveSelection(false) // callback function
  );

  return (
    <div ref={wrapperRef} className={styles.language}>
      <ActiveLanguage onClick={() => setActiveSelection(!activeSelection)} selection={activeSelection} current={current}/>
      
      <AllLanguages languages={languages} active={activeSelection}/>
    </div>
  )
}

function ActiveLanguage({onClick, selection, current}) {
  return (
    <div className={styles.languageCurrent} onClick={onClick}>
      <span>{current}</span>

      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={selection ? styles.rotate : ''}>
      <g id="icon small arrows">
      <g id="arrow-circle-left">
      <path id="Vector" d="M18.9577 9.9987C18.9577 14.9404 14.941 18.957 9.99935 18.957C5.05768 18.957 1.04102 14.9404 1.04102 9.9987C1.04102 5.05703 5.05768 1.04037 9.99935 1.04037C14.941 1.04037 18.9577 5.05703 18.9577 9.9987ZM2.29102 9.9987C2.29102 14.2487 5.74935 17.707 9.99935 17.707C14.2493 17.707 17.7077 14.2487 17.7077 9.9987C17.7077 5.7487 14.2493 2.29037 9.99935 2.29037C5.74935 2.29037 2.29102 5.7487 2.29102 9.9987Z" fill="#373F41"/>
      <path id="Vector_2" d="M13.5668 8.95104C13.5668 9.10937 13.5085 9.26771 13.3835 9.39271L10.4418 12.3344C10.2001 12.576 9.80013 12.576 9.55846 12.3344L6.6168 9.39271C6.37513 9.15104 6.37513 8.75104 6.6168 8.50937C6.85846 8.26771 7.25846 8.26771 7.50013 8.50937L10.0001 11.0094L12.5001 8.50937C12.7418 8.26771 13.1418 8.26771 13.3835 8.50937C13.5085 8.62604 13.5668 8.78437 13.5668 8.95104Z" fill="#373F41"/>
      </g>
      </g>
      </svg>
    </div>
  )
}

function AllLanguages({languages, active}) {
  const classes = `${active ? styles.languageAllActive: ''} ${styles.languageAll}`; // get classes for all languages block

  return (
    <div className={classes}>
      {languages.map(lang =>
        <a key={lang} href='/'>
          <div>
            {lang}
          </div>
        </a>
      )}
    </div>
  )
}


// PUT THIS FN IN HOOKS FOLDER
function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
  }, [ref]);
}