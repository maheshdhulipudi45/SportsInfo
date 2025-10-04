// HeroSection.jsx
import React, { useState, useEffect } from "react";
import styles from "../module.css/HeroSection.module.css";
import {
  FaUsers,
  FaBasketballBall,
  FaRegClock
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const slidesData = [
  {
    image: "bgsportsinfo.png",
    title: "Championship Moments",
    subtitle: "Witness the glory of victory and celebration of champions"
  },
  {
    image: "teamspirit.png",
    title: "Team Spirit",
    subtitle: "Feel the energy of unity and passion on the field"
  },
  {
    image: "unforgatable.png",
    title: "Unforgettable Matches",
    subtitle: "Don't miss a single moment of the epic showdowns"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slidesData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // auto slide every 4s
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.heroWrapper}>
      {/* ---------- Banner Section ---------- */}
      <div className={styles.banner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Welcome To <span>SportsInfo</span>
          </h1>
          <p className={styles.subtitle}>
            Stay updated with real-time coverage of cricket, kabaddi, volleyball,
            hockey, and more sports.
          </p>
          <div className={styles.buttons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              View Scores
            </button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              Browse Sports
            </button>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.icon}>
                <FaUsers />
              </span>
              <span className={styles.number}>1M</span>
              <span className={styles.label}>Sports Fans</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.icon}>
                <FaBasketballBall />
              </span>
              <span className={styles.number}>50+</span>
              <span className={styles.label}>Sports Categories</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.icon}>
                <FaRegClock />
              </span>
              <span className={styles.number}>24/7</span>
              <span className={styles.label}>Live Coverage</span>
            </div>
          </div>
        </div>
        <div className={styles.fieldOverlay}></div>
      </div>

      {/* ---------- Image Slider Section ---------- */}
      <section className={styles.sliderSection}>
        <div className={styles.sliderHeader}>
          <h2 className={styles.sliderTitle}>Discover the Action</h2>
          <p className={styles.sliderSubtitle}>
            Immerse yourself in the world of sports with our exclusive coverage
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className={`${styles.slide} ${
                  index === currentIndex ? styles.active : ""
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={styles.slideImage}
                />
                <div className={styles.slideContent}>
                  <h3>{slide.title}</h3>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.prevBtn} onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={styles.nextBtn} onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className={styles.dotsContainer}>
            {slidesData.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
