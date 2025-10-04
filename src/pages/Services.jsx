import React from 'react';
import styles from '../module.css/AboutandServices.module.css';
import {FaClock,FaChartLine,FaBell,FaGlobe,FaDatabase,FaMobileAlt} from 'react-icons/fa'
// Reusable component for the service cards
const ServiceCard = ({ icon, title, description, features }) => (
  <div className={styles.serviceCard}>
    <div className={styles.icon}>{icon}</div>
    <div className={styles.content}>
      <h4>{title}</h4>
      <p>{description}</p>
      {features && (
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

// Main Services Page component
const Services = () => {
  const servicesData = [
    {
      icon: <FaClock/>,
      title: 'Live Score Updates',
      description: 'Get real-time scores and match updates with millisecond precision for all major sports events.',
      features: ['Real-time score updates', 'Ball-by-ball commentary', 'Match timeline', 'Live statistics'],
    },
    {
      icon: <FaChartLine/>,
      title: 'Sports Analytics',
      description: 'Comprehensive analytics and insights to help you understand team performance and match trends.',
      features: ['Player statistics', 'Team performance analysis', 'Historical data', 'Predictive insights'],
    },
    {
      icon: <FaBell/>,
      title: 'Match Notifications',
      description: 'Stay informed with instant notifications for match starts, key moments, and final results.',
      features: ['Match start alerts', 'Goal/action notifications', 'Result updates', 'Custom alerts'],
    },
    {
      icon: <FaGlobe/>,
      title: 'Global Coverage',
      description: 'Follow sports events from around the world with coverage spanning multiple leagues and tournaments.',
      features: ['International tournaments', 'Local leagues', 'Multi-sport coverage', '24/7 monitoring'],
    },
    {
      icon: <FaMobileAlt/>,
      title: 'Mobile Optimization',
      description: 'Access all features seamlessly across desktop, tablet, and mobile devices with our responsive design.',
      features: ['Responsive design', 'Mobile app experience', 'Offline capabilities', 'Fast loading'],
    },
    {
      icon: <FaDatabase/>,
      title: 'Historical Data',
      description: 'Access extensive historical data and archives for research, analysis, and comparison purposes.',
      features: ['Match archives', 'Player records', 'Team statistics', 'Season summaries'],
    },
  ];

  return (
    <div className={styles.servicesPage}>
      <div className={styles.header}>
        <h1>Our <span>Services</span> </h1>
        <p>
          Discover our comprehensive range of sports information services designed to keep you
          connected with the world of sports.
        </p>
      </div>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
