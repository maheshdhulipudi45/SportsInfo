import React from "react";
import styles from '../module.css/AboutandServices.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.mainHeading}>About <span>SportsInfo</span></h1>
        <p className={styles.subHeading}>
          Your one-stop platform for all sports updates and news.
        </p>
      </div>

      {/* Content Section */}
      <div className={styles.contentContainerCentered}>
        <div className={styles.textSection}>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <p className={styles.description}>
            SportsInfo is built to connect sports lovers, players, and fans with
            the latest updates, live scores, and exclusive insights. Our mission
            is to deliver reliable sports information in one place, making it
            easier for you to stay updated on your favorite games and teams.
          </p>

          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p className={styles.description}>
            We aim to become the most trusted sports information hub where fans
            can explore events, schedules, and stories across different sports.
            With a clean and user-friendly interface, SportsInfo ensures you
            never miss a moment of action.
          </p>

          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <ul className={styles.list}>
            <li>Real-time sports updates and scores</li>
            <li>News, schedules, and fixtures in one place</li>
            <li>Easy-to-use and responsive design</li>
            <li>Dedicated to sports enthusiasts worldwide</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
