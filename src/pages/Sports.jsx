// src/components/Sports.js
import React, { useState } from 'react';
import styles from '../module.css/Sports.module.css';
import { 
  FaClock, 
  FaMapMarkerAlt, 
  FaChartLine, 
  FaVolleyballBall, 
  FaBasketballBall, 
  FaRunning, 
  FaTableTennis, 
  FaFutbol,
  FaSearch
} from 'react-icons/fa';

const Sports = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [sportsData] = useState({
    cricket: {
      icon: <FaChartLine />,
      matches: [
        { status: 'Live', team1: { name: 'India', score: '287/6' }, team2: { name: 'Australia', score: '145/4' }, meta: '2nd Innings - 25.3 overs', venue: 'Melbourne Cricket Ground' },
        { status: 'Completed', team1: { name: 'England', score: '298' }, team2: { name: 'South Africa', score: '301/7' }, meta: 'Match Finished', venue: "Lord's Cricket Ground" },
        { status: 'Upcoming', team1: { name: 'Pakistan', score: '' }, team2: { name: 'New Zealand', score: '' }, meta: 'Tomorrow 2:00 PM', venue: 'Eden Park, Auckland' },
      ],
    },
    kabaddi: {
      icon: <FaRunning />,
      matches: [
        { status: 'Live', team1: { name: 'Puneri Paltan', score: '28' }, team2: { name: 'Bengal Warriors', score: '24' }, meta: '2nd Half - 15:30', venue: 'Thyagaraj Sports Complex' },
        { status: 'Completed', team1: { name: 'Jaipur Pink Panthers', score: '35' }, team2: { name: 'U Mumba', score: '32' }, meta: 'Match Finished', venue: 'Gachibowli Indoor Stadium' },
        { status: 'Upcoming', team1: { name: 'Tamil Thalaivas', score: '' }, team2: { name: 'Haryana Steelers', score: '' }, meta: 'Today 8:30 PM', venue: 'Sawai Mansingh Stadium' },
      ],
    },
    volleyball: {
      icon: <FaVolleyballBall />,
      matches: [
        { status: 'Live', team1: { name: 'Brazil', score: '2' }, team2: { name: 'Italy', score: '1' }, meta: 'Set 4 - 18:15', venue: 'Olympic Arena' },
        { status: 'Completed', team1: { name: 'USA', score: '3' }, team2: { name: 'Poland', score: '1' }, meta: 'Match Finished', venue: 'Sports Palace' },
        { status: 'Upcoming', team1: { name: 'Russia', score: '' }, team2: { name: 'Serbia', score: '' }, meta: 'Today 6:00 PM', venue: 'Volleyball Arena' },
      ],
    },
    basketball: {
      icon: <FaBasketballBall />,
      matches: [
        { status: 'Completed', team1: { name: 'Lakers', score: '110' }, team2: { name: 'Celtics', score: '105' }, meta: 'Final', venue: 'Staples Center' },
        { status: 'Live', team1: { name: 'Warriors', score: '85' }, team2: { name: 'Rockets', score: '82' }, meta: '4th QTR', venue: 'Chase Center' },
      ],
    },
    badminton: {
      icon: <FaTableTennis />,
      matches: [
        { status: 'Upcoming', team1: { name: 'C. Marin', score: '' }, team2: { name: 'A. Ohori', score: '' }, meta: 'Today 7:00 PM', venue: 'Arena Birmingham' },
        { status: 'Completed', team1: { name: 'K. Momota', score: '2-1' }, team2: { name: 'L. Shi Feng', score: '1-2' }, meta: 'Match Finished', venue: 'Gwangju City Stadium' },
      ],
    },
    football: {
      icon: <FaFutbol />,
      matches: [
        { status: 'Live', team1: { name: 'Barcelona', score: '1' }, team2: { name: 'Real Madrid', score: '0' }, meta: "65'", venue: 'Camp Nou' },
        { status: 'Upcoming', team1: { name: 'Manchester United', score: '' }, team2: { name: 'Liverpool', score: '' }, meta: 'Tomorrow 3:00 PM', venue: 'Old Trafford' },
      ],
    },
  });

  // Filtered Sports based on search term
  const filteredSports = Object.entries(sportsData).filter(([sport]) =>
    sport.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.mainTitle}>Live <span>Match Updates</span> </h1>
      <p className={styles.subtitle}>Real-time scores and match information across all sports</p>

      {/* 🔍 Search Box */}
      <div className={styles.searchBox}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search Sports..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      
      <div className={styles.sportsGrid}>
        {filteredSports.length > 0 ? (
          filteredSports.map(([sport, data]) => (
            <div key={sport} className={`${styles.sportsSection} ${styles[sport]}`}>
              <h2 className={styles.sportHeader}>
                {data.icon}
                <span>{sport.toUpperCase()}</span>
              </h2>

              <div className={styles.matchesContainer}>
                {data.matches.map((match, idx) => (
                  <div key={idx} className={`${styles.matchCard} ${styles[match.status.toLowerCase()]}`}>
                    <div className={styles.matchHeader}>
                      <div className={styles.status}>{match.status}</div>
                      <div className={styles.meta}><FaClock /> {match.meta}</div>
                    </div>

                    <div className={styles.teams}>
                      <div className={styles.team}>
                        <span className={styles.teamName}>{match.team1.name}</span>
                        <strong className={styles.score}>{match.team1.score}</strong>
                      </div>
                      <span className={styles.vs}>VS</span>
                      <div className={styles.team}>
                        <span className={styles.teamName}>{match.team2.name}</span>
                        <strong className={styles.score}>{match.team2.score}</strong>
                      </div>
                    </div>

                    <div className={styles.venue}>
                      <FaMapMarkerAlt /> {match.venue}
                    </div>
                  </div>
                ))}
                <button className={styles.viewMoreBtn}>View More</button>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No sports found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default Sports;
