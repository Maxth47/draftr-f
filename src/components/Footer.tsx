'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image src="/images/logo-2.svg" alt="Draftr" width={20} height={24} />
              <span>Draftr</span>
            </Link>
            <p className={styles.followLabel}>Follow us on:</p>
            <div className={styles.socials}>
              <Link href="#" aria-label="Facebook">
                <Image src="/images/icon-10.svg" alt="Facebook" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="X">
                <Image src="/images/icon-11.svg" alt="X" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Image src="/images/icon-12.svg" alt="Instagram" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Image src="/images/icon-13.svg" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Image src="/images/icon-14.svg" alt="YouTube" width={20} height={20} />
              </Link>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#download">Download</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.heading}>All Pages</h4>
            <ul>
              <li><Link href="/power-ups">Power-Ups <span className={styles.newBadge}>New</span></Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="#">Waitlist</Link></li>
              <li><Link href="/changelog">Changelog</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">404</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Designed by <strong>Webestica</strong>, Powered by <strong>Framer</strong></p>
        </div>
      </div>
    </footer>
  );
}
