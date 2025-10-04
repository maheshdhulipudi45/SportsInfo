import React from "react";
import styles from "./Footer.module.css";
import { FaTwitter, FaInstagram, FaWhatsapp,FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Column 1 - Logo & About */}
        <div className={styles.footerSection}>
          <h2 className={styles.logo}>SportsInfo</h2>
          <p className={styles.aboutText}>
            Your ultimate destination for live sports and scores and updates comprehensive coverage of all major sports in worldwide.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Sports Coverage */}
        <div className={styles.footerSection}>
          <h3>Sports Coverage</h3>
          <ul>
            <li><a href="#">Cricket</a></li>
            <li><a href="#">Volleyball</a></li>
            <li><a href="#">Hockey</a></li>
            <li><a href="#">Football</a></li>
            <li><a href="#">Basketball</a></li>
          </ul>
        </div>

        {/* Column 4 - Newsletter & Social */}
        <div className={styles.footerSection}>
          <h3>Connect With Us</h3>
          <div className={styles.socialLinks}>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaWhatsapp/></a>
            <a href="#"><FaPhone/></a>
          </div>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p>{new Date().getFullYear()} SportsCentral. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
