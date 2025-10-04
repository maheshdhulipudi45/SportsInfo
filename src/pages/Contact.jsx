import React from 'react';
import styles from '../module.css/Contact.module.css';
import { FaPhone,FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  // 📌 Contact Info Objects
  const contactCards = [
    {
      icon: <FaEnvelope/>,
      title: "Email Us",
      description: `contact@sports-central.com
Send us your queries and we'll respond within 24 hours.`
    },
    {
      icon: <FaPhone/>,
      title: "Call Us",
      description: `+1 (555) 123-4567
Available Monday to Friday, 9 AM - 6 PM EST`
    },
    {
      icon: <FaMapMarkerAlt/>,
      title: "Visit Us",
      description: `123 Sports Avenue, Athletic City, AC 12345
Our headquarters are open for scheduled visits.`
    },
    {
      icon: <FaClock/>,
      title: "Business Hours",
      description: `Mon - Fri: 9:00 AM - 6:00 PM
Weekend support available for urgent matters.`
    }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.mainHeading}>Get <span>In Touch</span></h1>
        <p className={styles.subHeading}>
          Have questions, feedback, or need assistance? We're here to help you with all your
          sports information needs.
        </p>
      </div>

      <div className={styles.contentContainer}>
        {/* Left: Contact Form */}
        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Send us a Message</h3>
            <form>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Tell us more about your inquiry..."></textarea>
              <button type="submit" className={styles.submitButton}>
                <span className={styles.submitIcon}></span> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right: Contact Information */}
        <div className={styles.infoSection}>
          <h3 className={styles.infoTitle}>Contact Information</h3>
          <p className={styles.infoDescription}>
            We're always ready to help and answer any questions you might have. Reach out to us
            through any of the following methods, and our team will get back to you promptly.
          </p>

          <div className={styles.cardsGrid}>
            {contactCards.map((card, index) => (
              <div key={index} className={styles.contactCard}>
                <div className={styles.icon}>{card.icon}</div>
                <div className={styles.cardContent}>
                  <h4>{card.title}</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
