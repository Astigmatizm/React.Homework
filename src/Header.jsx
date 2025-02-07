import React from 'react';
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.divMain}>
      <header className={styles.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3NO2Vnx8UKl6YEcKgVQmQa95jibneHZnnA&s" alt="ITstep" className={styles.imgLogo}/>
        <nav className={styles.navbar}>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
        </nav>
        <button className={styles.btnSignup}>
            Sign Up
        </button>
      </header>
    </div>
  );
}

export default Header;
