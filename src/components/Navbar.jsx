import React, { useState } from "react";
import { FaTrophy, FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <span>SportsInfo</span>
      </div>

      {/* Toggle Button (Mobile) */}
      <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links + Login */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <Link to="/" onClick={handleCloseMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleCloseMenu}>About</Link>
        </li>
        <li>
          <Link to="/services" onClick={handleCloseMenu}>Services</Link>
        </li>
        <li>
          <Link to="/news" onClick={handleCloseMenu}>News</Link>
        </li>
        <li>
          <Link to="/sports" onClick={handleCloseMenu}>Sports</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleCloseMenu}>Contact</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleCloseMenu}>
            <button className={styles.loginBtn}>
              <FaSignInAlt className={styles.loginIcon} />
              Login
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
