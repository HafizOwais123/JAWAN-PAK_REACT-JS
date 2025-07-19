import React from 'react';
import styles from './MainNavbar.module.css';
import logo from '../../assets/img/logo123.png';
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left side logo */}
      <div className={styles.logo}>
        {/* Aap yahan apna logo image ya text rakh sakte ho */}
        <img src={logo}alt="Logo" />
      </div>

      {/* Center links */}
      <ul className={styles.navLinks}>
        <li><a href="#home">Categories</a></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right side search box + icon */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Course..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton} aria-label="Search">
         <FiSearch />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
