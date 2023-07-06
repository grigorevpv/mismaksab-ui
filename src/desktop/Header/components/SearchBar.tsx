// import React, { useState, useEffect } from 'react';
// import styles from '../scss/Header.scss';
// import searchSvg from './../../../assets/icons/search.svg';
// import classnames from 'classnames';

// // spinner css
// import commonStyles from './../../../scss/common.module.css';

// // fetch hook
// import useLoader from '../../../hooks/useLoader';
// import SearchService from '../../../API/SearchService';

// export default function SearchBar() {
//   const [value, setValue] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   // animation if input is clicked
//   const [shown, setShown] = useState(false);

//   // custom fetch hook
//   const [fetchFn, isMathesLoading, matchError] = useLoader(async(inputVal) => {
//     const res = await SearchService.getMatches(inputVal);
//     return res.data;
//   }, 'return');

//   // when input value changes, get and set new search matches
//   useEffect(() => {
//     (async function () {
//       const trimValue = value.trim();
//       let result = [];

//       if (trimValue !== '') result = await fetchFn(trimValue); // trimValue will be passed as inputVal in fetchFn callback
//       setSearchResults(result);
//     })();
//   }, [value]);

//   return (
//     <div className={classnames(styles.search, {
//       [styles.shown]: shown
//     })}>

//       <SearchInput
//         onChange={setValue}
//         value={value}
//         setShown={setShown}
//       />

//       <SearchResults
//         error={matchError}
//         shown={shown}
//         searchResults={searchResults}
//         isLoading={isMathesLoading}
//       />

//     </div>
//   )
// }

// function SearchInput({onChange, value, setShown}) {
//   return (
//     <div className={styles.searchInput}>
//       <div className={styles.searchSvg}>
//         <img src={searchSvg}/>
//       </div>

//       <input type='text' placeholder='Найти товар' value={value}
//         onFocus={() => setShown(true)}
//         onBlur={() => setShown(false)}

//         // show search results
//         onChange={(e) => {
//           onChange(e.target.value);

//           if (e.target.value === '') setShown(false)
//           else setShown(true);
//         }}
//       />
//     </div>
//   )
// }

// function SearchResults({
//   searchResults,
//   isLoading,
//   shown,
//   error,
//   viewAllText = 'Посмотреть все',
//   errorText = 'Ошибка загрузки'
// }) {
//   // if input is focused and there are results, show result block
//   if (shown) { // input is focused
//     if (searchResults.length > 0 && !isLoading) { // if there are results
//       return (
//         <div className={styles.searchResults}>

//           {/* display search results */}
//           {searchResults.map(match =>
//             <a href='/' key={match.id}>
//               <div className={styles.searchResultsItem}>
//                 <span>{match.userId}</span>
//               </div>
//             </a>
//           )}

//           {/* display show all results button */}
//           <a className={styles.searchResultsWrapper} href='/'>
//             <div key='see-more' className={styles.searchResultsItem}>
//               <span>{viewAllText}</span>
//             </div>
//           </a>
          
//         </div>
//       )
//     }
//     else if (isLoading){ // if request is pending display spinner
//       return (
//         <div className={styles.searchResults}>
//           <div className={commonStyles.spinner}></div>
//         </div>
//       )
//     }
//     else if (error) { // check error
//       return (
//         <div className={styles.searchResults}>
//           <div className={styles.searchError}>
//             {errorText}
//           </div>
//         </div>
//       )
//     }
//   }
// }
