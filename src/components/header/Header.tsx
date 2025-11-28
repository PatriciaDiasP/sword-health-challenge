import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={`body-sm uppercase ${styles.logo}`} aria-hidden="true">
        logo
      </p>
      <div className={styles.separator} />
      <Link href="/" aria-label="Go to homepage">
        <Image src="/images/moveLogo.png" alt="Sword Move logo" width={101} height={24} />
      </Link>
    </header>
  );
}
