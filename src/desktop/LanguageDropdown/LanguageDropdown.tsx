import React, { useRef, useState, useCallback } from "react";
import cn from "classnames";
import languageSvg from "../../assets/icons/language.svg";
import useOutsideClick from "../../hooks/useOutsideClick";
import styles from "./LanguageDropdown.scss";

interface Props {
  selectedLanguage: string;
  languages: string[];
}

export function LanguageDropdown({ selectedLanguage, languages }: Props) {
  const [activeSelection, setActiveSelection] = useState(false);

  // detect click
  const wrapperRef = useRef<HTMLDivElement>(null);
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
        selectedLanguage={selectedLanguage}
        languagesPopupVisible={activeSelection}
        onClick={setActiveCallback}
      />

      <AllLanguages languages={languages} visible={activeSelection} />
    </div>
  );
}

interface ActiveLanguageProps {
  selectedLanguage: string;
  languagesPopupVisible: boolean;
  onClick: () => void;
}

function ActiveLanguage({ selectedLanguage, languagesPopupVisible, onClick }: ActiveLanguageProps) {
  return (
    <div className={styles.languageCurrent} onClick={onClick}>
      <span className={styles.languageCurrentLang}>{selectedLanguage}</span>

      <div
        className={cn(styles.svg, {
          [styles.rotate]: languagesPopupVisible,
        })}
      >
        <img src={languageSvg} alt="language svg" />
      </div>
    </div>
  );
}

interface AllLanguagesProps {
  languages: string[];
  visible: boolean;
}

function AllLanguages({ languages, visible }: AllLanguagesProps) {
  return (
    <div
      className={cn(styles.languageAll, {
        [styles.shown]: visible,
      })}
    >
      {languages.map((lang) => (
        <a key={lang} href="/">
          <div className={styles.languageAllLang}>{lang}</div>
        </a>
      ))}
    </div>
  );
}
