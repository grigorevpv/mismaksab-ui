import React, { useState } from 'react'
import styles from './../Header.module.css'

export default function SearchBar() {
  const searchSvgSize = 20; // svg size in px
  const [value, setValue] = useState('');

  // animation if input is clicked
  const [shown, setShown] = useState(false);
  const classes = `${shown ? styles.searchShown: ''} ${styles.search}`; // get all classes for search bar

  return (
    <div className={classes}>
      <SearchInput
        svgSize={searchSvgSize}
        onChange={setValue}
        value={value}
        setShown={setShown}
      />

      <SearchResults shown={shown} value={value}/>
    </div>
  )
}

function SearchInput({svgSize, onChange, value, setShown}) {
  return (
    <div className={styles.searchInput}>
      <SearchSvg size={svgSize}/>

      <input type='text' placeholder='Найти товар' value={value}
        onFocus={() => setShown(true)}
        onBlur={() => setShown(false)}

        // show search results
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

function SearchSvg({size}) {
  return (
    <div className={styles.searchSvg}>
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 43">
        <path id="Vector" d="M8.64865 0C3.89189 0 0 3.89189 0 8.64865C0 13.4054 3.89189 17.2973 8.64865 17.2973C13.4054 17.2973 17.2973 13.4054 17.2973 8.64865C17.2973 3.89189 13.4054 0 8.64865 0ZM5.90703 4.36757C6.75459 4.36757 7.43784 5.05081 7.43784 5.90703C7.43784 6.7546 6.75459 7.43784 5.90703 7.43784C5.05081 7.43784 4.36757 6.7546 4.36757 5.90703C4.36757 5.05081 5.05081 4.36757 5.90703 4.36757ZM11.4335 12.973C10.5859 12.973 9.9027 12.2811 9.9027 11.4335C9.9027 10.5859 10.5859 9.9027 11.4335 9.9027C12.2811 9.9027 12.973 10.5859 12.973 11.4335C12.973 12.2811 12.2811 12.973 11.4335 12.973ZM5.62162 12.9989L4.32432 11.7016L11.7016 4.32433L12.9989 5.62162L5.62162 12.9989Z" fill="#5B5B5B"/>
        <rect id="Rectangle 18" x="13.8086" y="15.4697" width="2.34897" height="6.40628" transform="rotate(-45 13.8086 15.4697)" fill="#5B5B5B"/>
        </g>
      </svg>
    </div>
  )
}


function SearchResults({shown, value}) {
  const foundArr = matchSearch(value);

  // check if results should be shown
  let isShown = false;
  if (shown && foundArr.length > 0) isShown = true; // if input is focused and there are results, show result block
   
  // if there are search results
  if (isShown) return (
    <div className={styles.searchResults}>
      {foundArr.map(match =>
        <a href='/' key={match}>
          <div className={styles.searchResultsItem}>
            <span>{match}</span>
          </div>
        </a>
      )}

      <a href='/'>
        <div key='see-more' className={styles.searchResultsItem}>
          <span>Посмотреть все</span>
        </div>
      </a>
    </div>
  )


  // get search matches function
  function matchSearch(value) {
    const searchData = ['123', '23', '3324']; // test variable
    const foundArr = [];

    // check empty
    if (value.trim() === '') return [];

    let i = 0;
    while(foundArr.length < 3 && searchData[i]) {
      if (searchData[i].includes(value)) foundArr.push(searchData[i]);
      i++;
    }

    return foundArr;
  }
}
