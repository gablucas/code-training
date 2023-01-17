import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <h1>Code Training</h1>
      </div>
    </header>
  )
}

export default Header