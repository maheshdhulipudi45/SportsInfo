// SportsBanner.jsx
import React from 'react';
import styles from '../module.css/HeroSection.module.css';
import { FaUsers, FaBasketballBall, FaTrophy, FaRegClock } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome To <span>SportsInfo</span></h1>
        <p className={styles.subtitle}>
          Stay updated with real-time coverage of cricket, kabaddi, volleyball, hockey, and more sports.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>View Scores</button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Browse Sports</button>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.icon}><FaUsers /></span>
            <span className={styles.number}>1M</span>
            <span className={styles.label}>Sports Fans</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.icon}><FaBasketballBall /></span>
            <span className={styles.number}>50+</span>
            <span className={styles.label}>Sports Categories</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.icon}><FaRegClock /></span>
            <span className={styles.number}>24/7</span>
            <span className={styles.label}>Live Coverage</span>
          </div>
        </div>
      </div>
      <div className={styles.fieldOverlay}></div>
    </div>
  );
};

export default HeroSection;