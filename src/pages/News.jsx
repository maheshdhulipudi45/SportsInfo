import React, { useState } from "react";
import styles from "../module.css/News.module.css";

const sampleNews = [
  {
    id: 1,
    title: "Championship Final: City FC Crowned Champions",
    date: "2025-10-01",
    excerpt:
      "City FC secured a thrilling 2-1 victory in the championship final after a late winner in stoppage time. Fans celebrated across the city as the club added another trophy to its cabinet.",
    imageAlt: "Championship winning moment",
  },
  {
    id: 2,
    title: "Rising Star: Teen Forward Signs Pro Contract",
    date: "2025-09-28",
    excerpt:
      "A promising young forward signed a professional deal today after an outstanding season for the youth academy. Scouts praised the player's vision and finishing ability.",
    imageAlt: "Young forward celebrating",
  },
  {
    id: 3,
    title: "Injury Update: Midfielder Ruled Out for 3 Weeks",
    date: "2025-09-25",
    excerpt:
      "Club medical team confirmed the midfielder will miss upcoming fixtures due to a hamstring strain — rehab is ongoing and a careful return is planned.",
    imageAlt: "Player in rehab",
  },
];

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
};

const News = ({ items = sampleNews }) => {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <section className={styles.newsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest News</h2>
        <p className={styles.subtitle}>Stay updated with the latest match reports, transfers and club news.</p>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.media} role="img" aria-label={item.imageAlt}>
              {/* Use real <img> or background-image in production */}
              <div className={styles.imagePlaceholder}>{item.title.slice(0, 1)}</div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.meta}>
                <time dateTime={item.date} className={styles.date}>
                  {formatDate(item.date)}
                </time>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <p className={styles.excerpt}>
                {expanded === item.id ? item.excerpt + " — full story continues here with more details and quotes." : item.excerpt.slice(0, 120) + (item.excerpt.length > 120 ? "…" : "")}
              </p>

              <div className={styles.actions}>
                <button
                  className={styles.readMore}
                  onClick={() => toggle(item.id)}
                  aria-expanded={expanded === item.id}
                >
                  {expanded === item.id ? "Show less" : "Read more"}
                </button>
                <button className={styles.share} onClick={() => navigator.clipboard?.writeText(window.location.href + `#news-${item.id}`)}>
                  Share
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default News;
