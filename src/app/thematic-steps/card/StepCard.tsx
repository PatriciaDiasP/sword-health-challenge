import Image from 'next/image';
import type { Step } from '../types/types';

import styles from './StepCard.module.css';

export default function StepCard({ stepNumber, src, alt, title, subtitle }: Step) {
  return (
    <article className={styles.stepCard}>
      <Image className={styles.image} src={src} alt={alt} width={320} height={213} />
      <div className={styles.content}>
        <div className={`strong-md uppercase ${styles.stepNumber}`}>{stepNumber}</div>
        <div className={styles.text}>
          <h4 className="heading-xl">{title}</h4>
          <p className="body-md">{subtitle}</p>
        </div>
      </div>
    </article>
  );
}
