import Image from 'next/image';

import styles from './ThematicSteps.module.css';

interface Step {
  stepNumber: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const steps: Step[] = [
  {
    stepNumber: 1,
    src: '/step1.png',
    alt: 'Girl looking at phone',
    title: 'Share a little bit about yourself',
    subtitle: "We'll learn about your goals, motivation and lifestyle.",
  },
  {
    stepNumber: 2,
    src: '/step2.png',
    alt: 'In-app phone call',
    title: 'Match with a Physical Health Specialist',
    subtitle: "You'll work together to set the right plan to help you achieve your 'why'.",
  },
  {
    stepNumber: 3,
    src: '/step3.png',
    alt: 'Girl exercising',
    title: 'Receive a tailored weekly Move Plan',
    subtitle: 'With achievable activities and daily step goals that evolve as you do.',
  },
];

function StepCard({ stepNumber, src, alt, title, subtitle }: Step) {
  return (
    <article className={styles.stepCard}>
      <Image className={styles.image} src={src} alt={alt} width={320} height={213} />
      <div className={styles.content}>
        <div className={styles.stepNumber}>{stepNumber}</div>
        <div className={styles.text}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </article>
  );
}

export default function ThematicSteps() {
  return (
    <section aria-labelledby="getting-started-heading" className={styles.container}>
      <header className={styles.header}>
        <div className={styles.label}>
          <h2 id="getting-started-heading">how it works</h2>
        </div>
        <h3>
          getting started is <span>simple.</span>
        </h3>
      </header>

      <div className={styles.steps}>
        {steps.map((step) => (
          <StepCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            src={step.src}
            alt={step.alt}
            title={step.title}
            subtitle={step.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
