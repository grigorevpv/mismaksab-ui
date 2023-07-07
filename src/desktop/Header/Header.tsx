import React from 'react';

import styles from './Header.scss';

interface Props {
  info: React.ReactElement;
  logo: React.ReactElement;
  searchBar: React.ReactElement;
  languages: React.ReactElement;
  myListButton: React.ReactElement;
}

export function Header({ info, logo, searchBar, myListButton, languages }: Props) {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
        {logo}
        
        <div className={styles.navBarControls}>
          {searchBar}
          {myListButton}
          <div className={styles.info}>
            {info}
          </div>
          {languages}
        </div>
      </div>
    </nav>
  )
}
