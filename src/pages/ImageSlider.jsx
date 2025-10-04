import React, { useState, useEffect } from 'react';
import styles from '../module.css/ImageSlider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const slidesData = [
  {
    image: 'bgsportsinfo.png',
    title: 'Championship Moments',
    subtitle: 'Witness the glory of victory and celebration of champions'
  },
  {
    image: "teamspirit.png",
    title: 'Team Spirit',
    subtitle: 'Feel the energy of unity and passion on the field'
  },
  {
    image: 'unforgatable.png',
    title: 'Unforgettable Matches',
    subtitle: "Don't miss a single moment of the epic showdowns"
  }
];

const ImageSlider = () => {
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

  // useEffect hook to handle automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Scrolls every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]); // The effect re-runs when currentIndex changes

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderHeader}>
        <h2 className={styles.sliderTitle}>Discover the Action</h2>
        <p className={styles.sliderSubtitle}>Immerse yourself in the world of sports with our exclusive coverage</p>
      </div>

      <div className={styles.sliderContainer}>
        <div 
          className={styles.slider} 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slidesData.map((slide, index) => (
            <div key={index} className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}>
              <img src={slide.image} alt={slide.title} className={styles.slideImage} />
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
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;