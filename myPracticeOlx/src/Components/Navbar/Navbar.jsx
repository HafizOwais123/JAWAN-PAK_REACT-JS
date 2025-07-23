import React from 'react';
import styles from './Navbar.module.css';
import car from "../../assets/img/car12345.png";
import home from "../../assets/img/home12345.png";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <div className={styles.logo}>OLX</div>
                <div className={styles.navItem}>
                    <img src={car} alt="Motors" className="w-25" />
                    <span>Motors</span>
                </div>
                <div className={styles.navItem}>
                    <img src={home} alt="Property" className="w-25" />
                    <span>Property</span>
                </div>
            </div>
            <div className={styles.navbarRight}>
                <a href="/login" className={styles.loginLink}>Login</a>
                <button className={styles.sellButton}>
                    <span>+ SELL</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
