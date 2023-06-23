import React from 'react'
import Logo from './components/Logo'
import Info from './components/Info'
import Language from './components/Language'
import MyListButton from './components/MyListButton'
import SearchBar from './components/SearchBar'

import styles from './Header.module.css' //tsx не работают стили!!!

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
