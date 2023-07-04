import React from 'react'
import Logo from './components/Logo'
import Info from './components/Info'
import Language from './components/Language'
import MyListButton from './components/MyListButton'
import SearchBar from './components/SearchBar'

import styles from './scss/Header.scss' //tsx не работают стили!!!

interface Props {
  suggestItems: string[];
  listItemsCount: number;
  selectedLanguage: string;
  onSearchChange: (searchText: string) => void;
  onLanguageChange: (selectedLanguage: string) => void;
}

export function Header() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
        <Logo/>
        
        <div className={styles.navBarControls}>
          <SearchBar/>
          <MyListButton/>
          <Info/>
          <Language/>
        </div>
      </div>
    </nav>
  )
}
