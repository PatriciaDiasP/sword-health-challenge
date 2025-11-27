'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './ThematicHero.module.css';

const WORDS = [
  'CAREER',
  'FUTURE SELF',
  'LOVED ONES',
  'STRENGTH',
  'GOALS',
  'ENERGY',
  'MARRIAGE',
  'HEALTH',
  'SELF ESTEEM',
  'HOBBIES',
];

export default function ThematicHero() {
  const [words, setWords] = useState(WORDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setWords((prev) => [...prev.slice(1), prev[0]]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container} aria-labelledby="hero-title">
      <div className={styles.leftColumn}>
        <div className={styles.leftContent}>
          <header>
            <h1 id="hero-title" className={styles.title}>
              i move for my
            </h1>
            <h2 className={styles.wordTitle} aria-live="polite">
              {words[2]}
            </h2>
          </header>
          <p>
            <strong>Mariana,</strong> whatever your why, it’s worth moving for. With weekly
            personalized movement plans and 1:1 expert guidance, Sword Move can guide you toward
            your healthiest self.
          </p>
          <button>Get started at no cost</button>
          <p className={styles.boldText}>Join 50,000+ members moving with purpose.</p>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Image src="/images/hero.png" alt="Mother hugging baby" fill priority />
        <div className={styles.wordsWrapper}>
          <ul className={styles.wordsColumn}>
            {words.map((word, i) => (
              <li key={word} className={`${i === 2 ? styles.active : ''}`}>
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
