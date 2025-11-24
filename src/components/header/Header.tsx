'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/swordlogo.png" alt="sword-logo" width={80} height={28} />
      </Link>
      <nav>
        <ul className={styles.menu}>
          {menuItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.activeLink : ''}`}
            >
              {label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
