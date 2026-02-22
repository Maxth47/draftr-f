'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/contact', label: 'Contact' },
  { href: '/power-ups', label: 'Power-Ups' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.svg" alt="Draftr" width={20} height={24} />
          <span>Draftr</span>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/login" className={`btn btn-dark btn-sm ${styles.loginBtn}`}>
          Login now
        </Link>
      </nav>
    </header>
  );
}
