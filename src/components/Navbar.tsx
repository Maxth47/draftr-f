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
        <div className={styles.logoWrap}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={117}
              height={40}
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              priority
            />
          </Link>
        </div>

        <div className={styles.navCenter}>
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <div key={link.href} className={styles.navLinkWrap}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.buttonWrap}>
          <Link href="https://www.framer.com/" target="_blank" rel="noopener" className={styles.loginBtn}>
            <span className={styles.loginText}>Login now</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
