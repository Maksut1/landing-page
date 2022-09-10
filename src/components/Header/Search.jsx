import React from 'react'
// import { IoSearchCircle } from 'react-icons/io'


import styles from './Search.module.scss'

const Search = () => {
  return (
      <div className={styles.firstTextWrapper}>
        <div className={styles.bg}></div>
        <h1 className={styles.textWrapper}>Make your interior moreminimalistic & modern</h1>
      <div className={styles.searchWrapper}>
                  <div className={styles.search}>
                  <input type="text" className={styles.searchTerm} id="input_text"></input>
                   {/* <IoSearchCircle/> */}
                   <button type="submit" className={styles.searchButton} >
                </button>
         </div>
     </div>
     </div>
  )
}

export default Search